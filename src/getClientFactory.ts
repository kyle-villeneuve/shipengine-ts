import {
  default as initClient,
  type ClientOptions,
  type Middleware,
} from "openapi-fetch";
import type { paths } from "./definitions";
import type { MaybeFunction } from "./typeUtils";

const envApiKey = process.env.SHIPENGINE_API_KEY;

type InitOptions = MaybeFunction<
  Omit<ClientOptions, "baseUrl" | "headers"> & {
    headers: Record<string, string>;
    /**
     * uniquely identify the client for per-account rate limiting state management
     **/
    clientId?: string;
  }
>;

class RetryError extends Error {
  name = "RetryError";
  message: string;

  constructor(message = "Rate limit exceeded") {
    super(message);
    this.message = message;
  }
}

interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  retryMultiplier: number;
}

// Only tracks when we can make the next request

const DEFAULT_RETRY_CONFIG: RetryConfig = {
  maxRetries: 5,
  baseDelay: 1_000, // 1 second
  maxDelay: 10_000, // 10 seconds
  retryMultiplier: 2, // Exponential backoff multiplier
};

class RateLimitHandler {
  // Only stores the rate limit window per clientId
  private rateLimitCache = new Map<string, number>();
  private retryConfig: RetryConfig;

  constructor(retryConfig?: Partial<RetryConfig>) {
    this.retryConfig = retryConfig
      ? { ...DEFAULT_RETRY_CONFIG, ...retryConfig }
      : DEFAULT_RETRY_CONFIG;
  }

  private calculateBackoff(retryCount: number): number {
    const scale = Math.pow(this.retryConfig.retryMultiplier, retryCount);
    const delay = this.retryConfig.baseDelay * scale;

    // Add jitter to prevent thundering herd
    return Math.min(
      this.retryConfig.maxDelay,
      delay + delay * (Math.random() * 0.5)
    );
  }

  // Check if we need to wait due to rate limiting
  private async handlePreRequest(clientId: string): Promise<void> {
    const waitUntil = this.rateLimitCache.get(clientId);

    if (!waitUntil) return;

    const wait = waitUntil - Date.now();
    if (wait > 0) {
      await new Promise((resolve) => setTimeout(resolve, wait));
    }
  }

  handleResponse(
    clientId: string,
    status: number,
    headers: Headers,
    retryCount: number
  ): void {
    if (status === 429) {
      if (retryCount >= this.retryConfig.maxRetries) {
        throw new RetryError("Max retries exceeded");
      }

      const retryAfter = headers.get("Retry-After");
      const retryMs = retryAfter
        ? parseInt(retryAfter, 10) * 1_000
        : this.calculateBackoff(retryCount);

      // Update the rate limit window for this API key
      this.rateLimitCache.set(clientId, Date.now() + retryMs);

      throw new RetryError();
    }

    // Reset rate limit info on successful response
    if (status < 400) {
      this.rateLimitCache.delete(clientId);
    }
  }

  wrap<T extends (arg1: any, arg2: any) => Promise<any>>(
    clientId: string,
    method: T
  ): T {
    return (async (arg1: Parameters<T>[0], arg2: Parameters<T>[1]) => {
      let retryCount = 0;

      while (true) {
        await this.handlePreRequest(clientId);
        const response = await method(arg1, arg2);

        try {
          // if a rate limit is detected in the response, this will throw a RetryError
          this.handleResponse(
            clientId,
            response.status,
            response.headers,
            retryCount
          );
          return response;
        } catch (error) {
          if (
            error instanceof RetryError &&
            error.message !== "Max retries exceeded"
          ) {
            retryCount++;
            continue;
          }

          throw error;
        }
      }
    }) as T;
  }
}

const rateLimitHandler = new RateLimitHandler();

export default async function makeClient(
  options: InitOptions,
  middleware?: Middleware[]
) {
  let headers: Record<string, string> | undefined;

  if (envApiKey) {
    headers = { "Api-Key": envApiKey };
  }

  // handle options as a callback
  if (typeof options === "function") {
    options = await options();
  }

  const API_KEY = options.headers["Api-Key"];

  if (!API_KEY) {
    throw new Error(
      "API key must be set as the environment variable `SHIPENGINE_API_KEY` or set during client creation in the `options` callback"
    );
  }

  const mergedHeaders = headers
    ? Object.assign(headers, options.headers)
    : options.headers;

  let { clientId, ...rest } = options;

  const client = initClient<paths>({
    baseUrl: "https://api.shipengine.com/",
    ...rest,
    headers: mergedHeaders,
  });

  if (middleware?.length) {
    client.use(...middleware);
  }

  clientId = clientId || API_KEY;

  // Each wrapped method handles its own retries
  client.DELETE = rateLimitHandler.wrap(clientId, client.DELETE);
  client.GET = rateLimitHandler.wrap(clientId, client.GET);
  client.PATCH = rateLimitHandler.wrap(clientId, client.PATCH);
  client.POST = rateLimitHandler.wrap(clientId, client.POST);
  client.PUT = rateLimitHandler.wrap(clientId, client.PUT);

  return client;
}

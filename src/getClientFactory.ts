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
  // Only stores the rate limit window per API key
  private rateLimitCache = new Map<string, number>();
  private retryConfig: RetryConfig;

  constructor(config?: Partial<RetryConfig>) {
    this.retryConfig = config
      ? { ...DEFAULT_RETRY_CONFIG, ...config }
      : DEFAULT_RETRY_CONFIG;
  }

  private calculateBackoff(retryCount: number): number {
    const delay = Math.min(
      this.retryConfig.baseDelay *
        Math.pow(this.retryConfig.retryMultiplier, retryCount),
      this.retryConfig.maxDelay
    );

    // Add jitter to prevent thundering herd
    return delay * (0.75 + Math.random() * 0.5);
  }

  // Check if we need to wait due to rate limiting
  private async handlePreRequest(apiKey: string): Promise<void> {
    const waitUntil = this.rateLimitCache.get(apiKey);

    if (!waitUntil) return;

    const wait = waitUntil - Date.now();
    if (wait > 0) {
      await new Promise((resolve) => setTimeout(resolve, wait));
    }
  }

  handleResponse(
    apiKey: string,
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
      this.rateLimitCache.set(apiKey, Date.now() + retryMs);

      throw new RetryError();
    }

    // Reset rate limit info on successful response
    if (status < 400) {
      this.rateLimitCache.delete(apiKey);
    }
  }

  wrap<T extends (...args: any[]) => Promise<any>>(
    apiKey: string,
    method: T
  ): T {
    return (async (...args: Parameters<T>) => {
      let retryCount = 0;

      while (true) {
        await this.handlePreRequest(apiKey);
        const response = await method(...args);

        try {
          this.handleResponse(
            apiKey,
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

  const client = initClient<paths>({
    baseUrl: "https://api.shipengine.com/",
    ...options,
    headers: mergedHeaders,
  });

  if (middleware?.length) {
    client.use(...middleware);
  }

  // Each wrapped method handles its own retries
  client.DELETE = rateLimitHandler.wrap(API_KEY, client.DELETE.bind(client));
  client.GET = rateLimitHandler.wrap(API_KEY, client.GET.bind(client));
  client.PATCH = rateLimitHandler.wrap(API_KEY, client.PATCH.bind(client));
  client.POST = rateLimitHandler.wrap(API_KEY, client.POST.bind(client));
  client.PUT = rateLimitHandler.wrap(API_KEY, client.PUT.bind(client));

  return client;
}

import {
  default as initClient,
  type ClientOptions,
  type Middleware,
} from "openapi-fetch";
import type { paths } from "./definitions";
import { RateLimitHandler } from "./RateLimitHandler";
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

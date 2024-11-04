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

export default async function makeClient(
  options: InitOptions,
  middleware?: Middleware[]
) {
  let headers: Record<string, string> | undefined;

  if (envApiKey) {
    headers = {
      "Api-Key": envApiKey,
    };
  }

  // handle options as a callback
  if (typeof options === "function") {
    options = await options();
  }

  if (!options.headers["Api-Key"]) {
    throw new Error(
      "API key must be set as the environment variable `SHIPENGINE_API_KEY` or set during client creation in the `options` callback"
    );
  }

  const client = initClient<paths>({
    baseUrl: "https://api.shipengine.com/",
    ...options,
    headers: headers
      ? Object.assign(headers, options.headers)
      : options.headers,
  });

  if (middleware?.length) {
    client.use(...middleware);
  }

  return client;
}

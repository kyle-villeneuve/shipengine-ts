import {
  default as initClient,
  type ClientOptions,
  type Middleware,
} from "openapi-fetch";
import type { paths } from "./definitions";
import { MaybeFunction } from "./typeUtils";

export default function makeClient(
  options: MaybeFunction<Omit<ClientOptions, "baseUrl">>,
  middleware?: Middleware[]
) {
  const client = initClient<paths>({
    baseUrl: "https://api.shipengine.com/",
    ...options,
  });

  if (middleware?.length) {
    client.use(...middleware);
  }

  return client;
}

import { default as initClient, type ClientOptions, type Middleware } from "openapi-fetch";
import type { paths } from "./definitions";
import type { MaybeFunction } from "./typeUtils";
type InitOptions = MaybeFunction<Omit<ClientOptions, "baseUrl" | "headers"> & {
    headers: Record<string, string>;
    /**
     * uniquely identify the client for per-account rate limiting state management
     **/
    clientId?: string;
}>;
export default function makeClient(options: InitOptions, middleware?: Middleware[]): Promise<initClient.Client<paths, `${string}/${string}`>>;
export {};

import { type ClientOptions, type Middleware } from "openapi-fetch";
import type { paths } from "./definitions";
import type { MaybeFunction } from "./typeUtils";
type InitOptions = MaybeFunction<Omit<ClientOptions, "baseUrl" | "headers"> & {
    headers: Record<string, string>;
}>;
export default function makeClient(options: InitOptions, middleware?: Middleware[]): Promise<import("openapi-fetch").Client<paths, `${string}/${string}`>>;
export {};

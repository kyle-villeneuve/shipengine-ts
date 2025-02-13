import { type ShipEngineTypes } from ".";
declare const getClient: (userId: string) => Promise<import("openapi-fetch").Client<ShipEngineTypes.paths, `${string}/${string}`>>;
export default getClient;

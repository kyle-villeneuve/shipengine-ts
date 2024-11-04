# ShipEngine Client

A type-safe fetch client for the ShipEngine.com API

## Authentication

If `SHIPENGINE_API_KEY` is in the environent variables it will be used as the auth token, else you will need to set a token using the callback when initializing a new ShipEngine client

## Client Usage

```ts
import getClientFactory from "shipengine-ts";

// get a user api token for the shipengine API here
async function userAPIKey(_userId: string) {
  return Math.random().toString(25).slice(2);
}

const getClient = (userId: string) => {
  return getClientFactory(async () => {
    const apiKey = await userAPIKey(userId);

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    headers["Api-Key"] = apiKey;

    return { headers };
  });
};

export default getClient;
```

## Client Usage

```ts
const client = await getClient("userId");

const carriers = await client.GET("/v1/carriers");

// full type safe request body/params/etc
// and type safe responses
const createPackage = await client.POST("/v1/packages", {
  body: {
    name: "name",
    package_code: "custom_12312",
    description: "description",
    dimensions: {
      height: 3,
      length: 3,
      width: 3,
      unit: "inch",
    },
  },
});
```

## Extracting types from codegen

```ts
import type { PickDeep, ShipEngineTypes } from "shipengine-ts";

// getting types for request body
type RateRequestBodyRaw = PickDeep<
  ShipEngineTypes.paths,
  ["/v1/rates", "post", "requestBody", "content", "application/json"]
>;

// getting types for response body
type RateResponseBodyRaw = PickDeep<
  ShipEngineTypes.paths,
  ["/v1/rates", "post", "responses", 200, "content", "application/json"]
>;

// getting types for response errors
type RateResponseErrors = PickDeep<
  ShipEngineTypes.paths,
  ["/v1/rates", "post", "responses", 400, "content", "application/json"]
>;
```

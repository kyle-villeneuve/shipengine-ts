# Type Safe ShipEngine Client

Create a type safe client

```ts
import getClientFactory from "./index";

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

client usage

```ts
const client = getClient("userId");

const carriers = client.GET("/v1/carriers");

// full type safe request body/params/etc
// and type safe responses
const createPackage = client.POST("/v1/packages", {
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

Extracting types from codegen

```ts
import type { paths } from "./definitions";
import type { PickDeep } from "./typeUtils";

type RateRequestBodyRaw = PickDeep<
  paths,
  ["/v1/rates", "post", "requestBody", "content", "application/json"]
>;
```

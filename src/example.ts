import type { paths } from "./definitions";
import getClientFactory from "./index";
import type { PickDeep } from "./typeUtils";

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

const client = getClient("userId");

// example of type safety for request/response

const carriers = client.GET("/v1/carriers");

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

type RateRequestBodyRaw = PickDeep<
  paths,
  ["/v1/rates", "post", "requestBody", "content", "application/json"]
>;

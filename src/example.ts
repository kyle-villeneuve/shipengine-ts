import {
  default as getClientFactory,
  type PickDeep,
  type ShipEngineTypes,
} from ".";

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

(async () => {
  const client = await getClient("userId");

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
})();

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

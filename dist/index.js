"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ShipEngineTypes: () => definitions_exports,
  default: () => makeClient
});
module.exports = __toCommonJS(index_exports);

// src/definitions.ts
var definitions_exports = {};

// src/getClientFactory.ts
var import_openapi_fetch = __toESM(require("openapi-fetch"));

// src/RateLimitHandler.ts
var RetryError = class extends Error {
  constructor(message = "Rate limit exceeded") {
    super(message);
    this.name = "RetryError";
    this.message = message;
  }
};
var DEFAULT_RETRY_CONFIG = {
  maxRetries: 5,
  baseDelay: 1e3,
  // 1 second
  maxDelay: 1e4,
  // 10 seconds
  retryMultiplier: 2
  // Exponential backoff multiplier
};
var RateLimitHandler = class {
  constructor(retryConfig) {
    // Only stores the rate limit window per clientId
    this.rateLimitCache = /* @__PURE__ */ new Map();
    this.retryConfig = retryConfig ? { ...DEFAULT_RETRY_CONFIG, ...retryConfig } : DEFAULT_RETRY_CONFIG;
  }
  calculateBackoff(retryCount) {
    const scale = Math.pow(this.retryConfig.retryMultiplier, retryCount);
    const delay = this.retryConfig.baseDelay * scale;
    return Math.min(
      this.retryConfig.maxDelay,
      delay + delay * (Math.random() * 0.5)
    );
  }
  // Check if we need to wait due to rate limiting
  async handlePreRequest(clientId) {
    const waitUntil = this.rateLimitCache.get(clientId);
    if (!waitUntil) return;
    const wait = waitUntil - Date.now();
    if (wait > 0) {
      await new Promise((resolve) => setTimeout(resolve, wait));
    }
  }
  handleResponse(clientId, status, headers, retryCount) {
    if (status === 429) {
      if (retryCount >= this.retryConfig.maxRetries) {
        throw new RetryError("Max retries exceeded");
      }
      const retryAfter = headers.get("Retry-After");
      const retryMs = retryAfter ? parseInt(retryAfter, 10) * 1e3 : this.calculateBackoff(retryCount);
      this.rateLimitCache.set(clientId, Date.now() + retryMs);
      throw new RetryError();
    }
    if (status < 400) {
      this.rateLimitCache.delete(clientId);
    }
  }
  wrap(clientId, method) {
    return (async (arg1, arg2) => {
      let retryCount = 0;
      while (true) {
        await this.handlePreRequest(clientId);
        const response = await method(arg1, arg2);
        try {
          this.handleResponse(
            clientId,
            response.status,
            response.headers,
            retryCount
          );
          return response;
        } catch (error) {
          if (error instanceof RetryError && error.message !== "Max retries exceeded") {
            retryCount++;
            continue;
          }
          throw error;
        }
      }
    });
  }
};

// src/getClientFactory.ts
var envApiKey = process.env.SHIPENGINE_API_KEY;
var rateLimitHandler = new RateLimitHandler();
async function makeClient(options, middleware) {
  let headers;
  if (envApiKey) {
    headers = { "Api-Key": envApiKey };
  }
  if (typeof options === "function") {
    options = await options();
  }
  const API_KEY = options.headers["Api-Key"];
  if (!API_KEY) {
    throw new Error(
      "API key must be set as the environment variable `SHIPENGINE_API_KEY` or set during client creation in the `options` callback"
    );
  }
  const mergedHeaders = headers ? Object.assign(headers, options.headers) : options.headers;
  let { clientId, ...rest } = options;
  const client = (0, import_openapi_fetch.default)({
    baseUrl: "https://api.shipengine.com/",
    ...rest,
    headers: mergedHeaders
  });
  if (middleware?.length) {
    client.use(...middleware);
  }
  clientId = clientId || API_KEY;
  client.DELETE = rateLimitHandler.wrap(clientId, client.DELETE);
  client.GET = rateLimitHandler.wrap(clientId, client.GET);
  client.PATCH = rateLimitHandler.wrap(clientId, client.PATCH);
  client.POST = rateLimitHandler.wrap(clientId, client.POST);
  client.PUT = rateLimitHandler.wrap(clientId, client.PUT);
  return client;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ShipEngineTypes
});

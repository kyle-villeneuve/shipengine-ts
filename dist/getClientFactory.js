"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = makeClient;
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
const RateLimitHandler_1 = require("./RateLimitHandler");
const envApiKey = process.env.SHIPENGINE_API_KEY;
const rateLimitHandler = new RateLimitHandler_1.RateLimitHandler();
function makeClient(options, middleware) {
    return __awaiter(this, void 0, void 0, function* () {
        let headers;
        if (envApiKey) {
            headers = { "Api-Key": envApiKey };
        }
        // handle options as a callback
        if (typeof options === "function") {
            options = yield options();
        }
        const API_KEY = options.headers["Api-Key"];
        if (!API_KEY) {
            throw new Error("API key must be set as the environment variable `SHIPENGINE_API_KEY` or set during client creation in the `options` callback");
        }
        const mergedHeaders = headers
            ? Object.assign(headers, options.headers)
            : options.headers;
        let { clientId } = options, rest = __rest(options, ["clientId"]);
        const client = (0, openapi_fetch_1.default)(Object.assign(Object.assign({ baseUrl: "https://api.shipengine.com/" }, rest), { headers: mergedHeaders }));
        if (middleware === null || middleware === void 0 ? void 0 : middleware.length) {
            client.use(...middleware);
        }
        clientId = clientId || API_KEY;
        // Each wrapped method handles its own retries
        client.DELETE = rateLimitHandler.wrap(clientId, client.DELETE);
        client.GET = rateLimitHandler.wrap(clientId, client.GET);
        client.PATCH = rateLimitHandler.wrap(clientId, client.PATCH);
        client.POST = rateLimitHandler.wrap(clientId, client.POST);
        client.PUT = rateLimitHandler.wrap(clientId, client.PUT);
        return client;
    });
}

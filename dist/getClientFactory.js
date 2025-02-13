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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = makeClient;
const openapi_fetch_1 = __importDefault(require("openapi-fetch"));
const envApiKey = process.env.SHIPENGINE_API_KEY;
function makeClient(options, middleware) {
    return __awaiter(this, void 0, void 0, function* () {
        let headers;
        if (envApiKey) {
            headers = {
                "Api-Key": envApiKey,
            };
        }
        // handle options as a callback
        if (typeof options === "function") {
            options = yield options();
        }
        const client = (0, openapi_fetch_1.default)(Object.assign(Object.assign({ baseUrl: "https://api.shipengine.com/" }, options), { headers: headers
                ? Object.assign(headers, options.headers)
                : options.headers }));
        if (middleware === null || middleware === void 0 ? void 0 : middleware.length) {
            client.use(...middleware);
        }
        return client;
    });
}

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
const _1 = __importDefault(require("."));
// get a user api token for the shipengine API here
function userAPIKey(_userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return Math.random().toString(25).slice(2);
    });
}
const getClient = (userId) => {
    return (0, _1.default)(() => __awaiter(void 0, void 0, void 0, function* () {
        // this is only needed when prcoess.env.SHIPENGINE_API_KEY is not set
        const apiKey = yield userAPIKey(userId);
        const headers = {
            "Content-Type": "application/json",
        };
        headers["Api-Key"] = apiKey;
        return { headers };
    }));
};
exports.default = getClient;
(() => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield getClient("userId");
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
}))();

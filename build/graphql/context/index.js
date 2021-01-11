"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authenticate_1 = __importDefault(require("./authenticate"));
const injectDataLoaders_1 = __importDefault(require("./injectDataLoaders"));
exports.default = async (request) => {
    let context = {};
    context = await authenticate_1.default(request, context);
    context = await injectDataLoaders_1.default(request, context);
    return context;
};

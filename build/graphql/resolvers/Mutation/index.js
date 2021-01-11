"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createIngredient_1 = __importDefault(require("./createIngredient"));
const createSeasoning_1 = __importDefault(require("./createSeasoning"));
exports.default = {
    createIngredient: createIngredient_1.default,
    createSeasoning: createSeasoning_1.default,
};

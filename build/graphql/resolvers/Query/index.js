"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ingredient_1 = __importDefault(require("./ingredient"));
const ingredients_1 = __importDefault(require("./ingredients"));
const seasoning_1 = __importDefault(require("./seasoning"));
const seasonings_1 = __importDefault(require("./seasonings"));
const viewer_1 = __importDefault(require("./viewer"));
exports.default = {
    ingredient: ingredient_1.default,
    ingredients: ingredients_1.default,
    seasoning: seasoning_1.default,
    seasonings: seasonings_1.default,
    viewer: viewer_1.default,
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Ingredient_1 = __importDefault(require("../../../entities/Ingredient"));
exports.default = async (_, { name, }, { user }) => {
    if (!(user === null || user === void 0 ? void 0 : user.verified))
        return new Error("you are not verified user");
    const ingredientInput = new Ingredient_1.default();
    ingredientInput.name = name;
    return await typeorm_1.getConnection().manager.save(ingredientInput);
};

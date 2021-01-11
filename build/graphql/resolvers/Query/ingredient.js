"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Ingredient_1 = __importDefault(require("../../../entities/Ingredient"));
exports.default = async (_, { id }) => {
    return await typeorm_1.getConnection().manager.getRepository(Ingredient_1.default).findOne(id);
};

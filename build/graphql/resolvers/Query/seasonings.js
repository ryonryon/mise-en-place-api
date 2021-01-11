"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Seasoning_1 = __importDefault(require("../../../entities/Seasoning"));
exports.default = async () => {
    return await typeorm_1.getConnection().manager.getRepository(Seasoning_1.default).find();
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../../../entities/User"));
exports.default = async (_, __, { user }) => {
    return await typeorm_1.getConnection().manager.getRepository(User_1.default).findOne(user.id);
};

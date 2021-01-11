"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_fastify_1 = require("apollo-server-fastify");
const context_1 = __importDefault(require("./context"));
const resolvers_1 = __importDefault(require("./resolvers"));
const typeDefs_1 = __importDefault(require("./typeDefs"));
exports.default = new apollo_server_fastify_1.ApolloServer({
    context: context_1.default,
    resolvers: resolvers_1.default,
    typeDefs: typeDefs_1.default,
    playground: true,
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fastify_1 = __importDefault(require("fastify"));
const typeorm_1 = require("typeorm");
const admin_1 = __importDefault(require("./admin"));
const graphql_1 = __importDefault(require("./graphql"));
require("reflect-metadata");
const fastify = fastify_1.default();
fastify.register(admin_1.default);
fastify.register(graphql_1.default.createHandler());
(async () => {
    await typeorm_1.createConnection();
    try {
        await fastify.listen({ port: 3000 });
        console.log(`🚀 Server is ready at http://localhost:3000/graphql`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();

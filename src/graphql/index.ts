import { ApolloServer } from "apollo-server-fastify";
import context from "./context";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

export default new ApolloServer({
  context,
  resolvers,
  typeDefs,
  playground: true,
});

import { FastifyRequest } from "fastify";

export interface DataLoaders {}

export default async (_: FastifyRequest, context: any): Promise<any> => {
  const dataLoaders: DataLoaders = {};

  return { ...context, dataLoaders };
};

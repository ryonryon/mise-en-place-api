import { getConnection } from "typeorm";
import Ingredient from "../../../entities/Ingredient";

export default async (_: any, { id }: { id: string }) => {
  return await getConnection().manager.getRepository(Ingredient).findOne(id);
};

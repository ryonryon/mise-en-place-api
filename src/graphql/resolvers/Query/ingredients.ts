import { getConnection } from "typeorm";
import Ingredient from "../../../entities/Ingredient";

export default async () => {
  return await getConnection().manager.getRepository(Ingredient).find();
};

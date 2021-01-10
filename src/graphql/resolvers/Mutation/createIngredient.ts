import { getConnection } from "typeorm";
import Ingredient from "../../../entities/Ingredient";

export default async (
  _: any,
  {
    name,
  }: {
    name: string;
  }
) => {
  const ingredientInput = new Ingredient();
  ingredientInput.name = name;

  return await getConnection().manager.save(ingredientInput);
};

import { getConnection } from "typeorm";
import { Context } from "../../context";
import Ingredient from "../../../entities/Ingredient";

export default async (
  _: any,
  {
    name,
  }: {
    name: string;
  },
  { user }: Context
) => {
  if (!user?.verified) return new Error("you are not verified user");

  const ingredientInput = new Ingredient();
  ingredientInput.name = name;

  return await getConnection().manager.save(ingredientInput);
};

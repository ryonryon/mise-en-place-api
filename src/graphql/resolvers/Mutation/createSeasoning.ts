import { getConnection } from "typeorm";
import { Context } from "../../context";
import Seasoning from "../../../entities/Seasoning";

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

  const seasonigInput = new Seasoning();
  seasonigInput.name = name;

  return await getConnection().manager.save(seasonigInput);
};

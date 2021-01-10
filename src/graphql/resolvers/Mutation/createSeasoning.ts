import { getConnection } from "typeorm";
import Seasoning from "../../../entities/Seasoning";

export default async (
  _: any,
  {
    name,
  }: {
    name: string;
  }
) => {
  const seasonigInput = new Seasoning();
  seasonigInput.name = name;

  return await getConnection().manager.save(seasonigInput);
};

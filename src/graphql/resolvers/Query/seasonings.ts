import { getConnection } from "typeorm";
import Seasoning from "../../../entities/Seasoning";

export default async () => {
  return await getConnection().manager.getRepository(Seasoning).find();
};

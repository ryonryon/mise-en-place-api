import { getConnection } from "typeorm";
import Seasoning from "../../../entities/Seasoning";

export default async (_: any, { id }: { id: string }) => {
  return await getConnection().manager.getRepository(Seasoning).findOne(id);
};

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";
import MenuSeaasoning from "./MenuSeaasoning";

@Entity()
export default class Seasoning {
  @PrimaryGeneratedColumn("uuid")
  id!: SeasoningId;

  @Column({ type: "text", nullable: false })
  name!: string;

  @OneToMany(() => MenuSeaasoning, (MenuSeaasoning) => MenuSeaasoning.seasoning)
  @JoinColumn()
  menuSeasonings!: MenuSeaasoning[];
}

export type SeasoningId = string & {
  _SeasoningIdBrand: never;
};

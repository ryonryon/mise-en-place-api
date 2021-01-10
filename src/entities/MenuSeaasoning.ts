import { Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import Menu, { MenuId } from "./Menu";
import Seasoning, { SeasoningId } from "./Seasoning";

@Entity()
export default class MenuSeaasoning {
  @PrimaryGeneratedColumn("uuid")
  id!: MenuSeaasoningId;

  @ManyToOne(() => Menu, (menu) => menu.ingredients, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  menu!: Menu | MenuId;

  @ManyToOne(() => Seasoning, (seasoning) => seasoning.menuSeasonings, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  seasoning!: Seasoning | SeasoningId;
}

export type MenuSeaasoningId = string & {
  _MenuSeaasoningIdBrand: never;
};

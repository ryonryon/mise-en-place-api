import { Entity, JoinColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import Menu, { MenuId } from "./Menu";
import Ingredient, { IngredientId } from "./Ingredient";

@Entity()
export default class MenuMenuIngredient {
  @PrimaryGeneratedColumn("uuid")
  id!: MenuMenuIngredientId;

  @ManyToOne(() => Menu, (menu) => menu.ingredients, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  menu!: Menu | MenuId;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.menuIngredients)
  @JoinColumn()
  ingredient!: Ingredient | IngredientId;
}

export type MenuMenuIngredientId = string & {
  _MenuMenuIngredientIdBrand: never;
};

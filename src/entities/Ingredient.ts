import {
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";

import MenuIngredient from "./MenuIngredient";

@Entity()
export default class Ingredient {
  @PrimaryGeneratedColumn("uuid")
  id!: IngredientId;

  @Column({ type: "text", nullable: false })
  name!: string;

  @OneToMany(
    () => MenuIngredient,
    (menuIngredient) => menuIngredient.ingredient
  )
  @JoinColumn()
  menuIngredients!: MenuIngredient[];
}

export type IngredientId = string & {
  _IngredientIdBrand: never;
};

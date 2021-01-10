import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
} from "typeorm";

import MenuIngredient from "./MenuIngredient";

@Entity()
export default class Menu {
  @PrimaryGeneratedColumn("uuid")
  id!: MenuId;

  @Column({ type: "text", nullable: false })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column()
  creator!: string;

  @Column({ type: "timestamp with time zone", nullable: false })
  createdAt!: string;

  @Column({ type: "timestamp with time zone", nullable: false })
  updatedAt!: string;

  @OneToMany(() => MenuIngredient, (menuIngredient) => menuIngredient.menu)
  @JoinColumn()
  ingredients!: MenuIngredient[];
}

export type MenuId = string & {
  _MenuIdBrand: never;
};

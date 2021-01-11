import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id!: UserId;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  email!: string | null;

  @Column({ type: "text", unique: true })
  authenticationId!: string;

  @Column({ type: "text" })
  profileImageURL!: string;

  @CreateDateColumn()
  readonly createdAt!: Date;
}

export type UserId = string & {
  _UserIdBrand: never;
};

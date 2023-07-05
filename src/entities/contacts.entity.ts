import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  Entity,
  Column,
} from "typeorm";

import Client from "./clients.entity";

export enum contactsCategory {
  GENERAL = "Geral",
  FAMILIAR = "Familiar",
  FRIEND = "Amigo",
  COWORKER = "Colega",
  SUPPLIER = "Fornecedor",
  CUSTOMERS = "Cliente",
}

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column() name: string;

  @Column({ unique: true }) email: string;

  @Column({ type: "bigint" }) phone: number;

  @Column({ type: "varchar", default: "Sem comentário" }) comment:
    | string
    | null
    | undefined;

  @Column({
    type: "enum",
    enum: contactsCategory,
    default: contactsCategory.GENERAL,
  })
  category: contactsCategory;

  @Column({ default: false })
  isFavorite: boolean;

  @CreateDateColumn({ type: "date" }) createdAt: string | Date;

  @ManyToOne(() => Client) client: Client | null;
}

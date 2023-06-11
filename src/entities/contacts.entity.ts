import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  Entity,
  Column,
} from "typeorm";

import Client from "./clients.entity";

export enum contactsCategory {
  GENERAL = "General",
  FAMILIAR = "Familiar",
  FRIEND = "Friend",
  COWORKER = "Coworker",
  SUPPLIER = "Supplier",
  CUSTOMERS = "Customers",
}

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column() name: string;

  @Column({ unique: true }) email: string;

  @Column({ type: "bigint" }) phone: number;

  @Column({type: "varchar", default: "Sem comentário"}) comment: string | null | undefined;

  @Column({
    type: "enum",
    enum: contactsCategory,
    default: contactsCategory.GENERAL,
  })
  category: contactsCategory;

  @CreateDateColumn({ type: "date" }) createdAt: string | Date;

  @ManyToOne(() => Client) client: Client | null;
}

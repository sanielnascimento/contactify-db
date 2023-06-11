import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import {Contact} from "./contacts.entity";

@Entity("clients")
export default class Client {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column() name: string;

  @Column({ unique: true }) email: string;

  @Column() password: string;

  @Column({ type: "bigint" }) phone: number;

  @Column() imgUrl: string;

  @CreateDateColumn({ type: "date" }) createdAt: string | Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}

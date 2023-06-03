import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";

@Entity("clients")
export default class Client {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column({ length: 127 }) full_name: string;

  @Column({ length: 127, unique: true }) email: string;

  @Column({ length: 127 }) password: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) this.password = hashSync(this.password, 10);
  }

  @Column() phone: number;

  @Column({ length: 300 }) img: string;

  @CreateDateColumn({ type: "date" }) createdAt: string | Date;

  @UpdateDateColumn({ type: "date" }) updatedAt: string | Date;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt?: string | Date | null;
}

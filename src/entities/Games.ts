import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Platform } from "./Platform";

@Entity("games")
export class Game {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  platform_id: string;

  @ManyToOne(() => Platform)
  @JoinColumn({ name: "platform_id" })
  platform: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

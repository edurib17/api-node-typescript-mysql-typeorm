import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("platforms")
export class Platform {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id) this.id = uuid()
  }
}



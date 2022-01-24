import { getRepository } from "typeorm";
import { Platform } from "../entities/Platform";

export class DeletePlatformsService {
  async execute(id:string) {
    const repo = getRepository(Platform);

    if(!(await repo.findOne(id))) return new Error("Platform does not exists!");

    return repo.delete(id)
  }
}

import { getRepository } from "typeorm";
import { Platform } from "../entities/Platform";

export class GetAllPlatformsService {
  async execute() {
    const repo = getRepository(Platform);

    const platforms = await repo.find();

    return platforms;
  }
}

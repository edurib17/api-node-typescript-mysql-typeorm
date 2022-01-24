import { getRepository } from "typeorm";
import { Platform } from "../entities/Platform";

type PlatformRequest = {
  name: string;
};

export class CreatePlatformService {
  async execute({ name }: PlatformRequest): Promise<Platform | Error> {
    const repo = getRepository(Platform);

    if(await repo.findOne({name})) return new Error("Platform already exists")

    const platform = repo.create({name});

    await repo.save(platform);

    return platform;
  }
}

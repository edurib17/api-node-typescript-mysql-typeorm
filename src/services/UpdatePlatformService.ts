import { getRepository } from "typeorm";
import { Platform } from "../entities/Platform";

type PlatformUpdateRequest = {
  id: string;
  name: string;
};

export class UpdatePlatformService {
  async execute({ id, name }: PlatformUpdateRequest) {
    const repo = getRepository(Platform);

    const platform = await repo.findOne(id);

    if (!platform) return new Error("Platform does not exists!!");

    platform.name = name ? name : platform.name;

    await repo.save(platform);

    return platform;
  }
}

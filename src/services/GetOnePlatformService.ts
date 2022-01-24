import { getRepository } from "typeorm";
import { Platform } from "../entities/Platform";

type GameGetOneRequest = {
  id: string;
};

export class GetOnePlatformService {
  async execute({ id }: GameGetOneRequest) {
    const repo = getRepository(Platform);

    const platform = await repo.findOne(id);

    if (!platform) return new Error("Platform does not exists!!");

    return platform;
  }
}

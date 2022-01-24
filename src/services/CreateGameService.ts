import { getRepository } from "typeorm";
import { Platform } from "../entities/Platform";
import { Game } from "../entities/Games";

type GameRequest = {
  name: string;
  description: string;
  price: number;
  platform_id: string;
};

export class CreateGameService {
  async execute({ name, description, price, platform_id }: GameRequest):Promise<Error | Game> {
    const repo = getRepository(Game);
    const repoPlatform = getRepository(Platform);

    if (!(await repoPlatform.findOne(platform_id))) return new Error("Platform does not exists!");

    const game = repo.create({ name, description, price, platform_id });

    await repo.save(game);

    return game;
  }
}

import { getRepository } from "typeorm";
import { Game } from "../entities/Games";

type GameUpdateRequest = {
  id: string;
  name: string;
  description: string;
  price: number;
  platform_id: string;
};

export class UpdateGameService {
  async execute({id,name,description,price,platform_id}: GameUpdateRequest) {
    const repo = getRepository(Game);

    const game = await repo.findOne(id);

    if (!game) return new Error("Game does not exists!!");

    game.name = name ? name : game.name;
    game.description = description ? description : game.description;
    game.price = price ? price : game.price;
    game.platform_id = platform_id ? platform_id : game.platform_id;

    await repo.save(game);

    return game;
  }
}

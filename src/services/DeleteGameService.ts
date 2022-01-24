import { getRepository } from "typeorm";
import { Game } from "../entities/Games";


export class DeleteGameService {
  async execute(id:string) {
    const repo = getRepository(Game);

    if(!(await repo.findOne(id))) return new Error("Game does not exists!");

    return repo.delete(id)
  }
}

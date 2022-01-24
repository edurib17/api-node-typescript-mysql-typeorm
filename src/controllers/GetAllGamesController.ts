import { Request, Response } from "express";
import { GetAllGamesService } from "../services/GetAllGamesService";

export class GetAllGamesController {
  async handle(req: Request, res: Response) {
    const service = new GetAllGamesService();

    const games = await service.execute();

    return res.json(games);
  }
}

import { Request, Response } from "express";
import { CreateGameService } from "../services/CreateGameService";

export class CreateGameController {
  async handle(req: Request, res: Response) {
    const { name, description, price, platform_id } = req.body;

    const service = new CreateGameService();

    const result = await service.execute({
      name,
      description,
      price,
      platform_id,
    });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}

import { Request, Response } from "express";
import { UpdateGameService } from "../services/UpdateGameService";

export class UpdateGameController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, price, platform_id } = req.body;

    const service = new UpdateGameService();

    const result = await service.execute({ id, name, description, price, platform_id });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}

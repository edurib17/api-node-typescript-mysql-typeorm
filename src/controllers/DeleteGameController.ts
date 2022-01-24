import { Request, Response } from "express";
import { DeleteGameService } from "../services/DeleteGameService";


export class DeleteGameController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteGameService

    const result = await service.execute(id);

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.status(204).end();
  }
}

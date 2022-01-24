import { Request, Response } from "express";
import { GetOneGameService } from "../services/GetOneGameService";

export class GetOneGameController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new GetOneGameService();

    const result = await service.execute({ id });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}

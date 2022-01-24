import { Request, Response } from "express";
import { DeletePlatformsService } from "../services/DeletePlatformService";

export class DeletePlatformsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeletePlatformsService();

    const result = await service.execute(id);

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.status(204).end();
  }
}

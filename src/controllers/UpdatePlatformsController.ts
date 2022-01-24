import { Request, Response } from "express";
import { UpdatePlatformService } from "../services/UpdatePlatformService";

export class UpdatePlatformsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const service = new UpdatePlatformService();

    const result = await service.execute({ id, name });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}

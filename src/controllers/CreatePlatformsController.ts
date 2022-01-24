import { Request, Response } from "express";
import { CreatePlatformService } from "../services/CreatePlatformService";

export class CreatePlatformsController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const service = new CreatePlatformService();

    const result = await service.execute({ name });

    if (result instanceof Error) return res.status(400).json(result.message);

    return res.json(result);
  }
}

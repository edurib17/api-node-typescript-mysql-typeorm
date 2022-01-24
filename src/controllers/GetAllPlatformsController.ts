import { Request, Response } from "express";
import { GetAllPlatformsService } from "../services/GetAllPlatformService";

export class GetAllPlatformsController {
  async handle(req: Request, res: Response) {
    const service = new GetAllPlatformsService();

    const platforms = await service.execute();

    return res.json(platforms);
  }
}

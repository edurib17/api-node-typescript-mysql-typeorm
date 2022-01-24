import { Router } from "express";

import { CreateGameController } from "../controllers/CreateGameController";
import { CreatePlatformsController } from "../controllers/CreatePlatformsController";
import { DeleteGameController } from "../controllers/DeleteGameController";
import { DeletePlatformsController } from "../controllers/DeletePlatformsController";
import { GetAllGamesController } from "../controllers/GetAllGamesController";
import { GetAllPlatformsController } from "../controllers/GetAllPlatformsController";
import { GetOneGameController } from "../controllers/GetOneGameController";
import { GetOnePlatformsController } from "../controllers/GetOnePlatformController";
import { UpdateGameController } from "../controllers/UpdateGameController";
import { UpdatePlatformsController } from "../controllers/UpdatePlatformsController";

const routes = Router();

routes
  .route("/platforms")
  .get(new GetAllPlatformsController().handle)
  .post(new CreatePlatformsController().handle);

routes
  .route("/platforms/:id")
  .get(new GetOnePlatformsController().handle)
  .put(new UpdatePlatformsController().handle)
  .delete(new DeletePlatformsController().handle);

routes
  .route("/games")
  .get(new GetAllGamesController().handle)
  .post(new CreateGameController().handle);

routes
  .route("/games/:id")
  .get(new GetOneGameController().handle)
  .put(new UpdateGameController().handle)
  .delete(new DeleteGameController().handle);
  
export { routes };

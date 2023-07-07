import controllers from "../controllers";
import middlewares from "../middlewares";

import { Router } from "express";
import schemas from "../schemas";

const clientsRouters: Router = Router();

clientsRouters.post(
  "",
  middlewares.validData(schemas.clients.clientCreateSchema),
  middlewares.uniqEmail,
  controllers.clients.create
);

clientsRouters.get("", middlewares.token, controllers.clients.get);

clientsRouters.patch(
  "",
  middlewares.token,
  middlewares.minData,
  middlewares.validData(schemas.clients.clientUpdateSchema),
  middlewares.uniqEmail,
  controllers.clients.update
);

clientsRouters.delete("", middlewares.token, controllers.clients.remove);

export default clientsRouters;

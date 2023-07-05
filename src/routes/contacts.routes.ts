import { Router } from "express";
import schemas from "../schemas";
import middlewares from "../middlewares";
import controllers from "../controllers";

const contactsRouters: Router = Router();

contactsRouters.use(middlewares.token);

contactsRouters.post(
  "",
  middlewares.validData(schemas.contacts.contactCreateSchema),
  middlewares.uniqEmail,
  controllers.contacts.create
);

contactsRouters.get("", controllers.contacts.read);

contactsRouters.get(
  "/:id",
  middlewares.ownerVerify,
  controllers.contacts.retrieve
);

contactsRouters.patch(
  "/:id",
  middlewares.ownerVerify,
  middlewares.minData,
  middlewares.validData(schemas.contacts.contactUpdateSchema),
  middlewares.uniqEmail,
  controllers.contacts.update
);

contactsRouters.patch(
  "/status/:id",
  middlewares.ownerVerify,
  controllers.contacts.put
);

contactsRouters.delete(
  "/:id",
  middlewares.ownerVerify,
  controllers.contacts.remove
);

export default contactsRouters;

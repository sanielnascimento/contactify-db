import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const loginRouters: Router = Router();

loginRouters.post("", middlewares.validData(schemas.login), controllers.login);

export default loginRouters;

import { Router } from "express";
import schemas from "../schemas";

const clientsRouters: Router = Router();

clientsRouters.post("");

clientsRouters.get("");

clientsRouters.patch("/:id");

clientsRouters.delete("/:id");

export default clientsRouters;

import { Router } from "express";
import schemas from "../schemas";

const contactsRouters: Router = Router();

contactsRouters.post("");

contactsRouters.get("");

contactsRouters.patch("/:id");

contactsRouters.delete("/:id");

export default contactsRouters;
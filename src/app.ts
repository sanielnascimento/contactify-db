import "reflect-metadata";
import "express-async-errors";

import express, { Application, json } from "express";
import middlewares from "./middlewares";

import routes from "./routes";
import cors from "cors";

const app: Application = express();

app.use(json());
app.use(cors());

app.use("/contacts", routes.contactsRouters);
app.use("/clients", routes.clientsRouters);
app.use("/login", routes.loginRouters);

app.use(middlewares.errors);

export default app;

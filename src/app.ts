import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import routes from "./routes";

const app: Application = express();

app.use(json());

app.use("/clients", routes.clientsRouters);
app.use("/contacts", routes.contactsRouters);

app.use(middlewares.errorsHandler);

export default app;

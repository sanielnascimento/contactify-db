import app from "./app";
import { AppDataSource } from "./data-souce";
import "dotenv/config";

const PORT: number = Number(process.env.APP_PORT!);
const runningMessage: string = `Server is running on port http://localhost:${PORT}`;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => console.log(runningMessage));
  })
  .catch((error) => console.log(error));
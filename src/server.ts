import app from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config";

const PORT: number = Number(process.env.APP_PORT!);
console.log(`Value of APP_PORT: ${process.env.APP_PORT}`);
console.log(`Parsed value of PORT: ${PORT}`);

const runningMessage: string = `Server is running on port:${PORT}`;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => console.log(runningMessage));
  })
  .catch((error) => console.log(error));

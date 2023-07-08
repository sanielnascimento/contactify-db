"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./data-source");
require("dotenv/config");
const PORT = Number(process.env.APP_PORT);
const runningMessage = `Server is running on port http://localhost:${PORT}`;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected!");
    app_1.default.listen(PORT, () => console.log(runningMessage));
})
    .catch((error) => console.log(error));

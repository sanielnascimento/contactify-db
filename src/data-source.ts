import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  if (!process.env.DATABASE_URL)
    throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    migrations: [path.join(__dirname, "./migrations/**.{ts,js}")],
    entities: [path.join(__dirname, "./entities/**.{ts,js}")],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
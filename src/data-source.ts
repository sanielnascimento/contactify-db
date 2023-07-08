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
    ssl: {
      rejectUnauthorized: false,
    },
  };
};

// const dataSourceConfig = (): DataSourceOptions => {
//   return process.env.DATABASE_URL
//     ? process.env.NODE_ENV
//       ? process.env.NODE_ENV === "production"
//         ? {
//             type: "postgres",
//             url: process.env.DATABASE_URL,
//             entities: [path.join(__dirname, "./entities/**.{ts,js}")],
//             migrations: [path.join(__dirname, "./migrations/**.{ts,js}")],
//           }
//         : {
//             type: "postgres",
//             url: process.env.DATABASE_URL,
//             synchronize: false,
//             logging: true,
//             entities: [path.join(__dirname, "./entities/**.{ts,js}")],
//             migrations: [path.join(__dirname, "./migrations/**.{ts,js}")],
//           }
//       : (() => {
//           throw new Error("Missing env var: 'NODE_ENV'");
//         })()
//     : (() => {
//         throw new Error("Missing env var: 'DATABASE_URL'");
//       })();
// };

export const AppDataSource = new DataSource(dataSourceConfig());

// if (!process.env.NODE_ENV) throw new Error("Missing env var: 'NODE_ENV'");

// if (process.env.NODE_ENV === "production") {
//   return {
//     type: "postgres",
//     url: process.env.DATABASE_URL,
//     entities: [entitiesPath],
//     migrations: [migrationPath],
//   };
// }

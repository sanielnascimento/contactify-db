import { DeepPartial, Repository } from "typeorm";
import { Client } from "../entities";

import schemas from "../schemas";
import { z } from "zod";

export type iClientResponse = z.infer<typeof schemas.clientsSchemas.clientResponseSchema>;
export type iClientRequest = z.infer<typeof schemas.clientsSchemas.clientCreateSchema>;

export type iClient = z.infer<typeof schemas.clientsSchemas.clientSchema>;
export type iClientUpdateRequest = DeepPartial<iClientRequest>;

export type iClientRepo = Repository<Client>;

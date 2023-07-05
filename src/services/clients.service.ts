import { iClientUpdateRequest, iClientResponse, iClientRequest, iClientRepo } from "../interfaces";
import { AppDataSource } from "../data-source";

import { getRounds, hashSync } from "bcryptjs";
import { Client } from "../entities";
import schemas from "../schemas";

const create = async (body: iClientRequest): Promise<iClientResponse> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

  body.password = hashSync(body.password, 10);

  const client = clientRepo.create(body);
  await clientRepo.save(client);

  return schemas.clients.clientResponseSchema.parse(client);
};

const retrieve = async (id: string): Promise<iClientResponse> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepo.findOneBy({ id: id });

  return schemas.clients.clientResponseSchema.parse(client);
};

const update = async (id: string, body: iClientUpdateRequest): Promise<iClientResponse> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

  if (body.password) {
    const isEncrypted = getRounds(body.password);
    if (!isEncrypted) body.password = hashSync(body.password, 10);    
  }

  const oldClient: Client | null = await clientRepo.findOneBy({ id: id });
  
  const updatedClient: Client = clientRepo.create({...oldClient, ...body});

  await clientRepo.save(updatedClient)

  return schemas.clients.clientResponseSchema.parse(updatedClient);
};

const remove = async (id: string): Promise<void> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

  await clientRepo.delete(id);
};

export default { create, retrieve, remove, update };

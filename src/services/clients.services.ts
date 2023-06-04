import { AppDataSource } from "../data-source";
import { Client } from "../entities";
import {
  iClientRepo,
  iClientRequest,
  iClientResponse,
  iClientUpdateRequest,
} from "../interfaces";

import schemas from "../schemas";

const create = async (clientData: iClientRequest): Promise<iClientResponse> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);
  const newClient = await clientRepo.save(clientRepo.create(clientData));

  return schemas.clients.clientResponseSchema.parse(newClient);
};

const retrieve = async (): Promise<iClientResponse> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

  return schemas.clients.clientResponseSchema.parse(await clientRepo.find());
};

const update = async (
  id: string,
  clientInfos: iClientUpdateRequest
): Promise<iClientResponse> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);
  const oldClient: Client | null = await clientRepo.findOneBy({ id: id });
  const updatedClient: Client = clientRepo.create({ ...oldClient, ...clientInfos });

  return schemas.clients.clientResponseSchema.parse(await clientRepo.save(updatedClient));
};

const remove = async (id: string): Promise<void> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

  await clientRepo.softRemove({ id: id });
};

export default { create, retrieve, remove, update };

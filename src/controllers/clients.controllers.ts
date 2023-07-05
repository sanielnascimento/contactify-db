import { Request, Response } from "express";
import { iClientRequest, iClientUpdateRequest } from "../interfaces";
import services from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const body: iClientRequest = req.body;

  const client = await services.clients.create(body);

  return res.status(201).json(client);
};

const get = async (_: Request, res: Response): Promise<Response> => {
  const id: string = res.locals.userId;

  const client = await services.clients.retrieve(id);

  return res.json(client);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const body: iClientUpdateRequest = req.body;
  const id: string = res.locals.userId;

  const client = await services.clients.update(id, body);

  return res.json(client);
};

const remove = async (_: Request, res: Response): Promise<Response> => {
  const id: string = res.locals.userId;

  await services.clients.remove(id);

  return res.status(204).send();
};

export default { create, get, update, remove };

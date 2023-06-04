import { Request, Response } from "express";
import { iClientUpdateRequest } from "../interfaces";
import services from "../services";

const create = async ( req: Request, res: Response): Promise<Response> => {
  return res.status(201).json(await services.clients.create(req.body));
};

const read = async ( _: Request, res: Response): Promise<Response> => {
  return res.json(await services.clients.retrieve());
};

const update = async ( req: Request, res: Response ): Promise<Response> => {
  const id: string = req.params.id;
  const body: iClientUpdateRequest = req.body;

  return res.json(await services.clients.update( id, body ));
};

const remove = async ( req: Request, res: Response): Promise<Response> => {
  await services.clients.remove(req.params.id)

  return res.status(204).send();
};

export default { create, read, update, remove }
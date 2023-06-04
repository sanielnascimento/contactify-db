import { Request, Response } from "express";
import services from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  return res.status(201).json(await services.contacts.create(req.body));
};

const read = async (_: Request, res: Response): Promise<Response> => {
  return res.json(await services.contacts.read());
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: string = req.params.id;

  return res.json(await services.contacts.update(id, req.body));
};

const remove = async (req: Request, res: Response): Promise<Response> => {
  await services.contacts.remove(req.params.id);

  return res.status(204).send();
};

export default { create, read, update, remove };

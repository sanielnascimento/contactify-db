import { Request, Response } from "express";
import services from "../services";
import { iContactUpdateRequest } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const id: string = res.locals.userId;
  const body = req.body;

  const newContact = await services.contacts.create(body, id);

  return res.status(201).json(newContact);
};

const read = async (_: Request, res: Response): Promise<Response> => {
  const id: string = res.locals.userId;

  const contacts = await services.contacts.read(id);

  return res.json(contacts);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const id: string = req.params.id;

  const contact = await services.contacts.retrieve(id);

  return res.json(contact);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const body: iContactUpdateRequest = req.body;
  const id: string = req.params.id;

  const newClient = await services.contacts.update(id, body);

  return res.json(newClient);
};

const remove = async (req: Request, res: Response): Promise<Response> => {
  const id: string = req.params.id;

  await services.contacts.remove(id);

  return res.status(204).send();
};

export default { create, read, retrieve, update, remove };

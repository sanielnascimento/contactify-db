import { DeepPartial, Repository } from "typeorm";
import {Client, Contact} from "../entities";

import schemas from "../schemas";
import { z } from "zod";

export type iContactResponse = z.infer<typeof schemas.contactsSchemas.contactResponseSchema>;
export type iContactRequest = z.infer<typeof schemas.contactsSchemas.contactCreateSchema>;

export type iContact = z.infer<typeof schemas.contactsSchemas.contactSchema>;
export type iContactUpdateRequest = DeepPartial<iContactRequest>;

export type iContactRepo = Repository<Contact >;
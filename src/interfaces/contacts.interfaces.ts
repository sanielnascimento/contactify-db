import { DeepPartial, Repository } from "typeorm";
import { Contact } from "../entities";

import schemas from "../schemas";
import { z } from "zod";

export type iContactsResponse = z.infer<typeof schemas.contacts.contactsResponseSchema>;
export type iContactCreateRequest = z.infer<typeof schemas.contacts.contactCreateSchema>;

export type iContactResponse = z.infer<typeof schemas.contacts.contactSchema>;
export type iContact = z.infer<typeof schemas.contacts.contactSchema>;

export type iContactUpdateRequest = DeepPartial<iContactCreateRequest>;
export type iContactRepo = Repository<Contact>;

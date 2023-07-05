import { DeepPartial, Repository } from "typeorm";
import { Contact } from "../entities";

import schemas from "../schemas";
import { z } from "zod";

export type iContact = z.infer<typeof schemas.contacts.contactSchema>;
export type iContactCreateRequest = z.infer<typeof schemas.contacts.contactCreateSchema>;

export type iContactUpdateRequest = DeepPartial<typeof schemas.contacts.contactUpdateSchema>;
export type iContactsResponse = z.infer<typeof schemas.contacts.contactsResponseSchema>;

export type iContactRepo = Repository<Contact>;

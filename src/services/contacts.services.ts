import { AppDataSource } from "../data-source";
import { Contact } from "../entities";

import { 
  iContactCreateRequest,
  iContactResponse,
  iContactsResponse,
  iContactUpdateRequest,
  iContactRepo
} from "../interfaces";

import schemas from "../schemas";


const create = async (contactData: iContactCreateRequest): Promise<iContactResponse> => {
  const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

  const newContact = contactRepo.save(contactRepo.create(contactData));

  return schemas.contacts.contactSchema.parse(newContact);
};


const read = async (): Promise<iContactsResponse> => {
  const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

  return schemas.contacts.contactsResponseSchema.parse(await contactRepo.find());
};


const update = async (id: string, contactInfos: iContactUpdateRequest): Promise<iContactResponse> => {
  const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

  const oldContact: Contact | null = await contactRepo.findOneBy({ id: id });
  const updatedContact: Contact = contactRepo.create({ ...oldContact, ...contactInfos });

  return schemas.contacts.contactSchema.parse(await contactRepo.save(updatedContact));
};


const remove = async (id: string): Promise<void> => {
  const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);
  
  await contactRepo.softRemove({id: id})
};

export default {create, read, remove, update }

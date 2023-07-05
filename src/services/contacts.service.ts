import { AppDataSource } from "../data-source";
import { Contact, Client } from "../entities";
import schemas from "../schemas";

import {
  iContact,
  iClientRepo,
  iContactRepo,
  iContactsResponse,
  iContactCreateRequest,
  iContactUpdateRequest,
} from "../interfaces";


const create = async (body: iContactCreateRequest, id: string): Promise<iContact> => {
    const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);
    const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

    const client: Client | null = await clientRepo.findOneBy({ id: id });

    const contact: Contact = contactRepo.create({ ...body, client });

    await contactRepo.save(contact);

    return schemas.contacts.contactSchema.parse(contact);
};


const read = async (id: string): Promise<iContactsResponse> => {
    const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

    const contacts: Contact[] = await contactRepo.find({
        relations: { client: true },
        where: { client: {id: id} },
    });
    
    return schemas.contacts.contactsResponseSchema.parse(contacts);
};


const retrieve = async (id: string): Promise<iContact> => {
    const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

    const contact: Contact | null = await contactRepo.findOneBy({ id: id });

    return schemas.contacts.contactSchema.parse(contact);
};

const update = async (id: string, body: iContactUpdateRequest): Promise<iContact> => {
    const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

    const oldContact: Contact | null = await contactRepo.findOneBy({ id: id });

    const updatedContact: Contact = contactRepo.create({...oldContact, ...body});

    await contactRepo.save(updatedContact)

    return schemas.contacts.contactSchema.parse(updatedContact);
};

const favoriteChange  = async (id: string): Promise<iContact | void> => {
    const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

    const oldContact: Contact | null = await contactRepo.findOneBy({ id: id });
    if (!oldContact) {
        return;        
    }
    const updatedContact: Contact = contactRepo.create({...oldContact, isFavorite: !oldContact.isFavorite});

    await contactRepo.save(updatedContact)

    return schemas.contacts.contactSchema.parse(updatedContact);
};

const remove = async (id: string): Promise<void> => {
    const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

    await contactRepo.delete({ id });
};

export default { create, read, retrieve, remove, update, favoriteChange  };

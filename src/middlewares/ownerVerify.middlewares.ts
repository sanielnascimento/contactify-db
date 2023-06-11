import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";

import { iContactRepo } from "../interfaces";
import { Contact } from "../entities";
import AppError from "../errors";


const ownerVerify = async (
  req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

    const clientId: string = res.locals.userId;
    const contactId: string = req.params.id;

    const contact: Contact | null = await contactRepo.findOne({
        where: { id: contactId },
        relations: { client: true },
    });

    if (!contact) throw new AppError("Contact not found!", 404);

    if (contact.client!.id !== clientId)
        throw new AppError("Insufficient Permission", 403);

    return next();
};

export default ownerVerify;

import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Client, Contact } from "../entities";
import AppError from "../errors";
import { iClientRepo, iContactRepo } from "../interfaces";

const uniqEmailEnsure = async ( req: Request, _: Response, next: NextFunction): Promise<void> => {
  const { email } = req.body;

  if (email) {
    if (req.baseUrl == "/clients") {
      const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

      const emailFound: Client | null = await clientRepo.findOne({
        where: { email },
      });

      if (emailFound) throw new AppError("Email address already in use", 409);

    } else {
      const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

      const emailFound: Contact | null = await contactRepo.findOne({
        where: { email },
      });

      if (emailFound) throw new AppError("Email address already registered", 409);
    }
  }

  return next();
};

export default uniqEmailEnsure;

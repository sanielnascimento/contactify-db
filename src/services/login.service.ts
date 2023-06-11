import { iLoginRequest, iClientRepo } from "../interfaces";
import { AppDataSource } from "../data-source";

import { Client } from "../entities";
import { compare } from "bcryptjs";

import AppError from "../errors";
import jwt from "jsonwebtoken";

import "dotenv/config";


const login = async (body: iLoginRequest): Promise<string> => {
  const clientRepo: iClientRepo = AppDataSource.getRepository(Client);
  const {email, password} = body;
  
  const client: Client | null = await clientRepo.findOne({ where: {email} });

  if (!client) throw new AppError("Invalid credentials", 401);

  const passwordMatch: boolean = await compare(password, client.password);

  if (!passwordMatch) throw new AppError("Invalid credentials", 401);

  const token: string = jwt.sign(
    { email: client.email },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: client.id.toString(),
    }
  );

  return token;
};

export default login;
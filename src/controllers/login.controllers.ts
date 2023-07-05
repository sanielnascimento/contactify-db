import { iLoginRequest } from "../interfaces";
import { Request, Response } from "express";
import service from "../services";


const login = async (req: Request, res: Response): Promise<Response> => {
  const body: iLoginRequest = req.body;

  const token = await service.login(body);

  return res.json({ token: token });
};

export default login;

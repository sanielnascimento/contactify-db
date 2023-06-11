import { NextFunction, Request, Response } from "express";

import AppError from "../errors";
import { ZodError } from "zod";

const errorsHandler = (error: Error, __: Request, res: Response, _: NextFunction) => {
  error instanceof AppError && res.status(error.statusCode).json({ message: error.message });
  error instanceof ZodError && res.status(400).json({ message: error.flatten().fieldErrors });

  console.error(error);

  return res.status(500).json({ message: error.message });
};

export default errorsHandler;

import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import AppError from "../errors";

const errorsHandler = (error: Error, __: Request, res: Response, _: NextFunction) => {
  error instanceof AppError &&
    res.status(error.statusCode).json({ message: error.message });

  error instanceof ZodError &&
    res.status(400).json({ message: error.flatten().fieldErrors });

  return res.status(500).json({ message: "Internal Server Error." });
};

export default errorsHandler;

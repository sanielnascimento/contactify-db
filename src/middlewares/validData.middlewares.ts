import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validData =
  (schema: ZodTypeAny) =>
  (req: Request, _: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);

    return next();
  };

export default validData;

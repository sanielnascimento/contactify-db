import { Request, Response, NextFunction } from "express";
import AppError from "../errors";

const minData = (req: Request, _: Response, next: NextFunction): void => {
  let errorMsg =
    req.baseUrl == "/clients"
      ? "At least one of these keys is required: name, email, password, phone or imgUrl."
      : "At least one of these keys is required: name, email, phone or comment.";

  if (Object.values(req.body).length < 1) throw new AppError(errorMsg, 400);

  return next();
};

export default minData;

import { Request, Response, NextFunction } from "express";
import AppError from "../errors";

import jwt from "jsonwebtoken";
import "dotenv/config";

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  let token: string | undefined = req.headers.authorization?.split(" ")[1];

  if (!token) throw new AppError("Missing bearer token!", 401);

  jwt.verify(
    token,
    process.env.SECRET_KEY!,
    (
      error: jwt.VerifyErrors | null,
      decoded: string | jwt.JwtPayload | undefined
    ) => {
      if (error) throw new AppError(error.message, 401);
      res.locals.userId = decoded ? decoded.sub : null;
    }
  );

  return next();
};

export default verifyToken;

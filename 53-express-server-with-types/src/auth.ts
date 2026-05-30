import {
  Request,
  Response,
  NextFunction,
} from "express";

export function auth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Auth");

  next();
}
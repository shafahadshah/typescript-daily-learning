import {
  Request,
  Response,
  NextFunction,
} from "express";

interface AuthRequest
  extends Request {
  userId?: string;
}

export function attachUser(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  req.userId = "123";

  console.log(
    req.userId
  );

  next();
}
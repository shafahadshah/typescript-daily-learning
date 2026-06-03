import {
  Response,
  NextFunction,
} from "express";

import { AuthRequest }
from "./auth-request";

export function attachUser(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  req.userId = "123";

  next();
}
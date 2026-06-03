import {
  Response,
  NextFunction,
} from "express";

import { AuthRequest }
from "./auth-request";

export function adminOnly(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const role = "admin";

  if (role !== "admin") {
    return res.status(403).json({
      message: "Forbidden",
    });
  }

  next();
}
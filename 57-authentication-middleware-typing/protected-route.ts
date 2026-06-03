import {
  Response,
} from "express";

import { AuthRequest }
from "./auth-request";

export function profile(
  req: AuthRequest,
  res: Response
) {
  res.json({
    userId: req.userId,
  });
}
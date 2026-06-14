import {
  Request,
  Response,
} from "express";

import { users }
from "./database";

export function getUsers(
  req: Request,
  res: Response
) {
  res.json(users);
}
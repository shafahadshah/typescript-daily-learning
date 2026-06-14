import {
  Request,
  Response,
} from "express";

import { users }
from "./database";

export function createUser(
  req: Request,
  res: Response
) {

  const user = {
    id: Date.now(),
    ...req.body,
  };

  users.push(user);

  res.status(201).json(
    user
  );
}
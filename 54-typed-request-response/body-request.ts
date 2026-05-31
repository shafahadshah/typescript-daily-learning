import {
  Request,
  Response,
} from "express";

type CreateUserBody = {
  name: string;
  email: string;
};

function createUser(
  req: Request<
    {},
    {},
    CreateUserBody
  >,
  res: Response
) {
  res.json(req.body);
}
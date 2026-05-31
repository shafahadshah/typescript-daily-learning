import {
  Request,
  Response,
} from "express";

type UserParams = {
  id: string;
};

function getUser(
  req: Request<UserParams>,
  res: Response
) {
  res.json({
    userId: req.params.id,
  });
}
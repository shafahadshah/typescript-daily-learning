import {
  Request,
  Response,
} from "express";

type UserParams = {
  id: string;
};

type UserResponse = {
  id: string;
  name: string;
};

function getUser(
  req: Request<UserParams>,
  res: Response<UserResponse>
) {
  res.json({
    id: req.params.id,
    name: "Ali",
  });
}
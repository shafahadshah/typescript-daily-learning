import {
  Request,
  Response,
} from "express";

type UserResponse = {
  id: number;
  name: string;
};

function getUser(
  req: Request,
  res: Response<UserResponse>
) {
  res.json({
    id: 1,
    name: "Ali",
  });
}
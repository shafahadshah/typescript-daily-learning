import express, {
  Request,
  Response,
} from "express";

const app = express();

type UserParams = {
  id: string;
};

app.get(
  "/users/:id",
  (
    req: Request<UserParams>,
    res: Response
  ) => {
    res.json({
      id: req.params.id,
    });
  }
);

app.listen(3000);
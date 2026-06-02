import express, {
  Request,
  Response,
} from "express";

const app = express();

app.use(express.json());

type CreateUserBody = {
  name: string;
};

app.post(
  "/users",
  (
    req: Request<
      {},
      {},
      CreateUserBody
    >,
    res: Response
  ) => {
    res.status(201).json({
      name: req.body.name,
    });
  }
);

app.listen(3000);
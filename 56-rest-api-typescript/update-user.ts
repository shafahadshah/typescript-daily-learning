import express, {
  Request,
  Response,
} from "express";

const app = express();

app.use(express.json());

type Params = {
  id: string;
};

type UpdateUserBody = {
  name: string;
};

app.put(
  "/users/:id",
  (
    req: Request<
      Params,
      {},
      UpdateUserBody
    >,
    res: Response
  ) => {
    res.json({
      id: req.params.id,
      name: req.body.name,
    });
  }
);

app.listen(3000);
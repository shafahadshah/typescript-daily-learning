import express, {
  Request,
  Response,
} from "express";

const app = express();

type Params = {
  id: string;
};

app.delete(
  "/users/:id",
  (
    req: Request<Params>,
    res: Response
  ) => {
    res.json({
      message:
        `User ${req.params.id} deleted`,
    });
  }
);

app.listen(3000);
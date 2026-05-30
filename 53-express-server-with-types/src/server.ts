import express, {
  Request,
  Response,
} from "express";

const app = express();

type SearchQuery = {
  keyword?: string;
};

app.get(
  "/search",
  (
    req: Request<
      {},
      {},
      {},
      SearchQuery
    >,
    res: Response
  ) => {
    res.json({
      keyword:
        req.query.keyword,
    });
  }
);

app.listen(3000);
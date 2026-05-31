import {
  Request,
  Response,
} from "express";

type SearchQuery = {
  page?: string;
};

function search(
  req: Request<
    {},
    {},
    {},
    SearchQuery
  >,
  res: Response
) {
  res.json({
    page: req.query.page,
  });
}
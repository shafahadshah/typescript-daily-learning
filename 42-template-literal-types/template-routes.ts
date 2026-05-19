type Route =
  "users" | "products";

type ApiRoute =
  `/api/${Route}`;

const url: ApiRoute =
  "/api/users";

console.log(url);
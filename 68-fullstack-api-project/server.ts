import express
from "express";

import {
  getUsers,
} from "./get-users";

import {
  createUser,
} from "./create-user";

const app = express();

app.use(
  express.json()
);

app.get(
  "/users",
  getUsers
);

app.post(
  "/users",
  createUser
);

app.listen(
  3000,
  () => {
    console.log(
      "Server running"
    );
  }
);
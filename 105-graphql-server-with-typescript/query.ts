import {
  graphql,
} from "graphql";

import {
  schema,
} from "./schema";

import {
  root,
} from "./resolver";

graphql({
  schema,
  source:
    "{ user { id name } }",
  rootValue: root,
}).then(
  console.log
);
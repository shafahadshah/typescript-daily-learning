import {
  buildSchema,
} from "graphql";

export const schema =
  buildSchema(`
    type User {
      id: ID!
      name: String!
    }

    type Query {
      user: User
    }
  `);

console.log(
  "Schema created"
);
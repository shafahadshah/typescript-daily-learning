import { User }
from "./types";

export function getUser(): User {
  return {
    id: 1,
    name: "Ali",
    email: "ali@test.com",
  };
}
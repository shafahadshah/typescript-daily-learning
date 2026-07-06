import {
  MemoryUserRepository,
} from "./user-repository-impl";

import {
  GetUser,
} from "./get-user";

import {
  UserController,
} from "./user-controller";

const repository =
  new MemoryUserRepository();

const useCase =
  new GetUser(
    repository
  );

export const
controller =
  new UserController(
    useCase
  );
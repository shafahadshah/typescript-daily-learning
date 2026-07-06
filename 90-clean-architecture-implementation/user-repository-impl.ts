import {
  User,
} from "./user-entity";

import {
  UserRepository,
} from "./user-repository";

export class
MemoryUserRepository
implements UserRepository {

  getById(
    id: number
  ): User {

    return {
      id,
      name: "Ali",
      email: "ali@test.com",
    };
  }
}
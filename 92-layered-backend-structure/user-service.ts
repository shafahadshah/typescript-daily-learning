import {
  UserRepository,
} from "./user-repository";

export class
UserService {

  constructor(
    private repository =
      new UserRepository()
  ) {}

  getUser() {
    return this.repository
      .getUser();
  }
}
import {
  UserRepository,
} from "./user-repository";

export class
GetUser {

  constructor(
    private repository:
      UserRepository
  ) {}

  execute(
    id: number
  ) {

    return this.repository
      .getById(id);
  }
}
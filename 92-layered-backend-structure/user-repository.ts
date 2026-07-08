import {
  User,
} from "./user-model";

export class
UserRepository {

  getUser(): User {
    return {
      id: 1,
      name: "Ali",
    };
  }
}
import {
  GetUser,
} from "./get-user";

export class
UserController {

  constructor(
    private getUser:
      GetUser
  ) {}

  show() {
    return this.getUser
      .execute(1);
  }
}
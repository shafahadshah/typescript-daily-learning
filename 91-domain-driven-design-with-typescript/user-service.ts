import { User }
from "./user";

export class UserService {

  createUser(
    id: number,
    name: string
  ): User {

    return new User(
      id,
      name
    );
  }
}

const service =
  new UserService();

console.log(
  service.createUser(
    1,
    "Ali"
  )
);
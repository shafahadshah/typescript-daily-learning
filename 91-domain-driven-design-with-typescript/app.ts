import {
  UserService,
} from "./user-service";

const service =
  new UserService();

const user =
  service.createUser(
    1,
    "Ali"
  );

console.log(user);
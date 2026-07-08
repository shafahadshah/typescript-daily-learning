import {
  UserService,
} from "./user-service";

const service =
  new UserService();

console.log(
  service.getUser()
);
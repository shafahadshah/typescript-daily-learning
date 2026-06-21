import {
  getUser,
} from "./user-service";

export function userController() {
  return getUser();
}
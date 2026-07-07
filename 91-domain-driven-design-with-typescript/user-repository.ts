import { User }
from "./user";

export interface
UserRepository {

  findById(
    id: number
  ): User;
}
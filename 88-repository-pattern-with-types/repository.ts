interface IRepository<T> {
  getById(
    id: number
  ): T;
}

type User = {
  id: number;
  name: string;
};

class UserRepository
  implements
  IRepository<User> {

  getById(
    id: number
  ): User {
    return {
      id,
      name: "Ali",
    };
  }
}

const repository =
  new UserRepository();

console.log(
  repository.getById(1)
);
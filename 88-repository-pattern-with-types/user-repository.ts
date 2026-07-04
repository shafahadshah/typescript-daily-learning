type User = {
  id: number;
  name: string;
};

class UserRepository {
  getById(id: number): User {
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
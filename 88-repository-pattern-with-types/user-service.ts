type User = {
  id: number;
  name: string;
};

class UserRepository {
  getById(
    id: number
  ): User {
    return {
      id,
      name: "Ali",
    };
  }
}

class UserService {

  constructor(
    private repository:
      UserRepository
  ) {}

  getUser() {
    return this.repository
      .getById(1);
  }
}

const service =
  new UserService(
    new UserRepository()
  );

console.log(
  service.getUser()
);
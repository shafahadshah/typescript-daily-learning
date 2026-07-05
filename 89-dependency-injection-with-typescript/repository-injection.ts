class UserRepository {

  find() {
    return {
      id: 1,
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
      .find();
  }
}

const service =
  new UserService(
    new UserRepository()
  );

console.log(
  service.getUser()
);
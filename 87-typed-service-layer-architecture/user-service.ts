type User = {
  id: number;
  name: string;
};

class UserService {
  getUser(): User {
    return {
      id: 1,
      name: "Ali",
    };
  }
}

const service =
  new UserService();

console.log(
  service.getUser()
);
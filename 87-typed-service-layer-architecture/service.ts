interface IService<T> {
  get(): T;
}

class UserService
  implements
  IService<string> {

  get(): string {
    return "Ali";
  }
}

const service =
  new UserService();

console.log(
  service.get()
);
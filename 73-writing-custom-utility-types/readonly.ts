type MyReadonly<T> = {
  readonly
  [K in keyof T]:
    T[K];
};

type User = {
  name: string;
};

const user:
  MyReadonly<User> = {
    name: "Ali",
  };

console.log(user);
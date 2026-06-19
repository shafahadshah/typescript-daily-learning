type Optional<T> = {
  [K in keyof T]?:
    T[K];
};

type User = {
  name: string;
  age: number;
};

const user:
  Optional<User> = {
    name: "Ali",
  };

console.log(user);
type User = {
  name: string;
  age: number;
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

const user: Nullable<User> = {
  name: null,
  age: 25,
};

console.log(user);
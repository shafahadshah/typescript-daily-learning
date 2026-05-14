type User = {
  name: string;
  age: number;
};

type ReadonlyUser = {
  [K in keyof User]: User[K];
};

const user: ReadonlyUser = {
  name: "Ali",
  age: 25,
};

console.log(user);
// Mapped types

type User = {
  name: string;
  age: number;
};

type ReadOnlyUser = {
  readonly [K in keyof User]: User[K];
};

const user: ReadOnlyUser = {
  name: "John",
  age: 30
};

console.log(user);
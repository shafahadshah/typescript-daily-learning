type MyPick<
  T,
  K extends keyof T
> = {
  [P in K]:
    T[P];
};

type User = {
  name: string;
  age: number;
};

const user:
  MyPick<
    User,
    "name"
  > = {
    name: "Ali",
  };

console.log(user);
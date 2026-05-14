type User = {
  id: number;
  active: boolean;
};

type Stringify<T> = {
  [K in keyof T]: string;
};

const user: Stringify<User> = {
  id: "1",
  active: "true",
};

console.log(user);
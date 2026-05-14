type User = {
  id: number;
  email: string;
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

const user: Optional<User> = {
  email: "ali@test.com",
};

console.log(user);
type User = {
  id: number;
  name: string;
  password: string;
};

type SafeUser = Omit<User, "password">;

const user: SafeUser = {
  id: 1,
  name: "Sara",
};

console.log(user);
type DatabaseUser = {
  id: number;
  email: string;
  password: string;
  secretToken: string;
};

type PublicUser = Omit<
  DatabaseUser,
  "password" | "secretToken"
>;

const user: PublicUser = {
  id: 1,
  email: "ali@test.com",
};

console.log(user);
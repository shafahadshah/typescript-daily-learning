type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

type PublicUser = Omit<
  User,
  "password"
>;

type UserNameOnly = Pick<
  User,
  "name"
>;

const publicUser: PublicUser = {
  id: 1,
  name: "Ali",
  email: "ali@test.com",
};

const nameOnly: UserNameOnly = {
  name: "Ali",
};

console.log(publicUser);
console.log(nameOnly);
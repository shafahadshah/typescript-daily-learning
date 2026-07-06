export type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Ali",
  email: "ali@test.com",
};

console.log(user);
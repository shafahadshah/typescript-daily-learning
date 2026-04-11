// Pick and Omit

type User = {
  name: string;
  age: number;
  email: string;
};

type UserPreview = Pick<User, "name" | "email">;
type UserWithoutEmail = Omit<User, "email">;

const preview: UserPreview = {
  name: "Ali",
  email: "ali@test.com"
};

const noEmail: UserWithoutEmail = {
  name: "Ali",
  age: 25
};

console.log(preview);
console.log(noEmail);
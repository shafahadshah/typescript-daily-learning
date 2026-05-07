type User = {
  id: number;
  name: string;
  age: number;
};

type UserPreview = Pick<User, "id" | "name">;

const user: UserPreview = {
  id: 1,
  name: "Ali",
};

console.log(user);
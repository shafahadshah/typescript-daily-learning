type User = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<
  User,
  "id" | "name"
>;

const user: UserPreview = {
  id: 1,
  name: "Ali",
};

console.log(user);
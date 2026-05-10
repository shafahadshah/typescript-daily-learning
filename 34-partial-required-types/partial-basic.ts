type User = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User>;

const user: PartialUser = {
  name: "Ali",
};

console.log(user);
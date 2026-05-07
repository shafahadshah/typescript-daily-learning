type User = {
  id: number;
  name: string;
};

type PartialUser = Partial<User>;

const user: PartialUser = {
  name: "Ali",
};

console.log(user);
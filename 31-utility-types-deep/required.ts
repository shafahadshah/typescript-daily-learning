type User = {
  id?: number;
  name?: string;
};

type FullUser = Required<User>;

const user: FullUser = {
  id: 1,
  name: "Ali",
};

console.log(user);
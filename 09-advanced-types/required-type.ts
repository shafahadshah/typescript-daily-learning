// Required utility type

type User = {
  name?: string;
  age?: number;
};

type FullUser = Required<User>;

const user: FullUser = {
  name: "Zara",
  age: 28
};

console.log(user);
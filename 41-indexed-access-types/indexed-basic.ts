type User = {
  name: string;
  age: number;
};

type UserName = User["name"];

const username: UserName = "Ali";

console.log(username);
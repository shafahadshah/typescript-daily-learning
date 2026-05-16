type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;

const key: UserKeys = "name";

console.log(key);
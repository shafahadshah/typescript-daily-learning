type User = {
  name: string;
  age: number;
  active: boolean;
};

type UserValues =
  User[keyof User];

const value1: UserValues = "Ali";
const value2: UserValues = 25;
const value3: UserValues = true;

console.log(value1);
console.log(value2);
console.log(value3);
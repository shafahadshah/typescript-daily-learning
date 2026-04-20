// Intersection with optional props

type User = {
  name: string;
};

type Extra = {
  age?: number;
};

type FullUser = User & Extra;

const u1: FullUser = { name: "Ali" };
const u2: FullUser = { name: "Sara", age: 25 };

console.log(u1);
console.log(u2);
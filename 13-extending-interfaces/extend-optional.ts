// Extending with optional properties

interface User {
  name: string;
}

interface Profile extends User {
  age?: number;
}

const p1: Profile = { name: "Ali" };
const p2: Profile = { name: "Sara", age: 25 };

console.log(p1);
console.log(p2);
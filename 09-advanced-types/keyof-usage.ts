// keyof usage

type User = {
  name: string;
  age: number;
};

function getValue(obj: User, key: keyof User) {
  return obj[key];
}

const user = { name: "Sara", age: 25 };

console.log(getValue(user, "name"));
console.log(getValue(user, "age"));
// Generics with objects

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Ali", age: 25 };

console.log(getValue(user, "name"));
console.log(getValue(user, "age"));
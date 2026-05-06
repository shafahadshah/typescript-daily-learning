// Using keyof constraint

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Sara", age: 22 };

console.log(getValue(user, "name"));
console.log(getValue(user, "age"));
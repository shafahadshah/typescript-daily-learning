function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge(
  { name: "Ali" },
  { age: 25 }
);

console.log(result);
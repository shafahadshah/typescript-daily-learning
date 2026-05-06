// Constraint using Record

function printKeys<T extends Record<string, any>>(obj: T) {
  console.log(Object.keys(obj));
}

printKeys({ name: "Ali", age: 25 });
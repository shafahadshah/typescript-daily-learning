// Constraint on object properties

function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

printName({ name: "Ali", age: 25 });
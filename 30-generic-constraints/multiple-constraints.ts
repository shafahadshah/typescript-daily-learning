// Multiple constraints

type HasName = { name: string };
type HasAge = { age: number };

function printUser<T extends HasName & HasAge>(user: T) {
  console.log(user.name, user.age);
}

printUser({ name: "Ali", age: 30 });
// Type inference in generics

function identity<T>(value: T): T {
  return value;
}

console.log(identity("Ali"));
console.log(identity(25));
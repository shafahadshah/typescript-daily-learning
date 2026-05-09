function identity<T>(value: T): T {
  return value;
}

console.log(identity("Hello"));
console.log(identity(123));
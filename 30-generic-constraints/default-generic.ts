// Default generic type

function createValue<T = string>(value: T): T {
  return value;
}

console.log(createValue("Hello"));
console.log(createValue<number>(100));
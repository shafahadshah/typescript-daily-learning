// Multiple generic types

function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

console.log(pair("Ali", 25));
console.log(pair(true, "yes"));
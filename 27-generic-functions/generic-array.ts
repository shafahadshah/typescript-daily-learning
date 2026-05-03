// Generics with arrays

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst([1, 2, 3]));
console.log(getFirst(["a", "b", "c"]));
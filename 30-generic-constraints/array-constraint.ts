// Constraint with arrays

function firstItem<T extends any[]>(arr: T) {
  return arr[0];
}

console.log(firstItem([10, 20, 30]));
console.log(firstItem(["a", "b"]));
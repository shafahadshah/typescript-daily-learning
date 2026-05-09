function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray(10));
console.log(wrapInArray("Ali"));
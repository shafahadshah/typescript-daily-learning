function filterArray<T>(
  arr: T[],
  callback: (item: T) => boolean
): T[] {
  return arr.filter(callback);
}

const numbers = [1, 2, 3, 4];

const result = filterArray(
  numbers,
  (num) => num > 2
);

console.log(result);
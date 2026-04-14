// Function type alias

type AddFn = (a: number, b: number) => number;

const add: AddFn = (a, b) => a + b;

console.log(add(5, 3));
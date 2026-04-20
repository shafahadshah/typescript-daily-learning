// Intersection with function types

type Add = {
  add: (a: number, b: number) => number;
};

type Multiply = {
  multiply: (a: number, b: number) => number;
};

type Calculator = Add & Multiply;

const calc: Calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

console.log(calc.add(2, 3));
console.log(calc.multiply(2, 3));
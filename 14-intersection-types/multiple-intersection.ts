// Multiple intersections

type A = { a: number };
type B = { b: number };
type C = { c: number };

type Combined = A & B & C;

const obj: Combined = {
  a: 1,
  b: 2,
  c: 3
};

console.log(obj);
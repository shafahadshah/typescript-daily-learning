// Mapped types with dynamic keys

type Keys = "a" | "b" | "c";

type Obj = {
  [K in Keys]: number;
};

const obj: Obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(obj);
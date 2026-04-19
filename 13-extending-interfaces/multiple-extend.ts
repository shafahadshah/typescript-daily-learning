// Extending multiple interfaces

interface A {
  a: number;
}

interface B {
  b: number;
}

interface C extends A, B {
  c: number;
}

const obj: C = {
  a: 1,
  b: 2,
  c: 3
};

console.log(obj);
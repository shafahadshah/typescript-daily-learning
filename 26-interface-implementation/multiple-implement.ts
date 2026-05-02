// Implement multiple interfaces

interface A {
  a: number;
}

interface B {
  b: number;
}

class C implements A, B {
  constructor(public a: number, public b: number) {}
}

const obj = new C(1, 2);

console.log(obj);
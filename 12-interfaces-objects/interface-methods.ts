// Interface with function

interface Calculator {
  add(a: number, b: number): number;
}

const calc: Calculator = {
  add(a, b) {
    return a + b;
  }
};

console.log(calc.add(5, 3));
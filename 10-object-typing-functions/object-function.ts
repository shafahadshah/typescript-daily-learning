// Object with function inside

type Calculator = {
  add: (a: number, b: number) => number;
};

const calc: Calculator = {
  add: (a, b) => a + b
};

function useCalc(c: Calculator) {
  console.log(c.add(5, 3));
}

useCalc(calc);
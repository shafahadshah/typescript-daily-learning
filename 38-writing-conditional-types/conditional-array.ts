type ArrayType<T> =
  T extends (infer U)[]
    ? U
    : T;

type A = ArrayType<string[]>;
type B = ArrayType<number>;

const value1: A = "Ali";
const value2: B = 100;

console.log(value1);
console.log(value2);
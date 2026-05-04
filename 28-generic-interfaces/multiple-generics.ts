// Multiple generics in interface

interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<string, number> = {
  first: "Ali",
  second: 25
};

console.log(pair);
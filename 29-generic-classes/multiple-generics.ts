// Multiple generic types

class Pair<T, U> {
  constructor(public first: T, public second: U) {}
}

const p = new Pair<string, number>("Ali", 25);

console.log(p);
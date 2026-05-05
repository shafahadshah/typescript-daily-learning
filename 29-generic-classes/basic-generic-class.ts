// Basic generic class

class Box<T> {
  constructor(public value: T) {}
}

const strBox = new Box<string>("Hello");
const numBox = new Box<number>(123);

console.log(strBox.value);
console.log(numBox.value);
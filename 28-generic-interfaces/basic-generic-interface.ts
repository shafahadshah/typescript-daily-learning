// Basic generic interface

interface Box<T> {
  value: T;
}

const strBox: Box<string> = { value: "Hello" };
const numBox: Box<number> = { value: 123 };

console.log(strBox.value);
console.log(numBox.value);
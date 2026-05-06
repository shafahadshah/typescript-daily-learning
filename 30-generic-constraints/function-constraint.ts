// Constraint with function type

type Fn = (...args: any[]) => any;

function callFunction<T extends Fn>(fn: T) {
  return fn();
}

function sayHello() {
  return "Hello";
}

console.log(callFunction(sayHello));
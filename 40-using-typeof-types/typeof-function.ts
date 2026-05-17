function greet(name: string) {
  return `Hello ${name}`;
}

type GreetFunction =
  typeof greet;

const sayHello: GreetFunction =
  (name) => `Hi ${name}`;

console.log(
  sayHello("Ali")
);
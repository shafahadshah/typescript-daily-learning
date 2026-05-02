// Basic interface implementation

interface User {
  name: string;
  age: number;
}

class Person implements User {
  constructor(public name: string, public age: number) {}
}

const p = new Person("Ali", 25);

console.log(p);
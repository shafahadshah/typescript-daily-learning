// Optional properties in interface

interface User {
  name: string;
  age?: number;
}

class Person implements User {
  constructor(public name: string, public age?: number) {}
}

const p1 = new Person("Ali");
const p2 = new Person("Sara", 22);

console.log(p1);
console.log(p2);
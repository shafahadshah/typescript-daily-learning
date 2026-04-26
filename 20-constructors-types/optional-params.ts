// Optional parameters in constructor

class User {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

const u1 = new User("Ali");
const u2 = new User("Sara", 22);

console.log(u1);
console.log(u2);
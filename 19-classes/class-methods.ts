// Class with methods

class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const u = new User("Sara");
console.log(u.greet());
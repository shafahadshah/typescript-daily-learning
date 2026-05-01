// Abstract class with properties

abstract class Person {
  constructor(public name: string) {}

  abstract getRole(): string;
}

class Admin extends Person {
  getRole() {
    return "Admin";
  }
}

const a = new Admin("Ali");
console.log(a.name);
console.log(a.getRole());
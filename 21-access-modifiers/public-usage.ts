// Public properties (default)

class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const u = new User("Ali");

console.log(u.name); // accessible 
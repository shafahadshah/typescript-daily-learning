// Basic getter

class User {
  constructor(private name: string) {}

  get userName() {
    return this.name;
  }
}

const u = new User("Ali");

console.log(u.userName);
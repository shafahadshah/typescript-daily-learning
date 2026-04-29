// Basic setter

class User {
  private name: string = "";

  set userName(value: string) {
    this.name = value;
  }

  get userName() {
    return this.name;
  }
}

const u = new User();

u.userName = "Sara";

console.log(u.userName);
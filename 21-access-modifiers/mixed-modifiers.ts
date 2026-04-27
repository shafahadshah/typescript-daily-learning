// Mixed access modifiers

class User {
  public name: string;
  private password: string;
  protected role: string;

  constructor(name: string, password: string, role: string) {
    this.name = name;
    this.password = password;
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

const u = new User("Ali", "1234", "admin");

console.log(u.name);
console.log(u.getRole());

// console.log(u.password); ❌ Error
// console.log(u.role); ❌ Error
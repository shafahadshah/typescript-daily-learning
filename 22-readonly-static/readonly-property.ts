// Readonly property

class User {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const u = new User(1, "Ali");

console.log(u);

// u.id = 2; ❌ Error
// Parameter properties shorthand

class User {
  constructor(
    public name: string,
    private age: number
  ) {}

  getAge() {
    return this.age;
  }
}

const u = new User("Ali", 25);

console.log(u.name);
console.log(u.getAge());
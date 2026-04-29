// Setter with validation

class User {
  private age: number = 0;

  set userAge(value: number) {
    if (value < 0) {
      console.log("Invalid age");
      return;
    }
    this.age = value;
  }

  get userAge() {
    return this.age;
  }
}

const u = new User();

u.userAge = 25;
console.log(u.userAge);

u.userAge = -5; // invalid
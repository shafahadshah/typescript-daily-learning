// Protected property in inheritance

class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  getName() {
    return this.name;
  }
}

const s = new Student("Ali");

console.log(s.getName());
// Protected properties

class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  showName() {
    return this.name; // accessible inside child
  }
}

const emp = new Employee("Sara");

console.log(emp.showName());

// console.log(emp.name); ❌ Error
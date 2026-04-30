// Basic inheritance

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {}

const emp = new Employee("Ali");

console.log(emp.name);
// Inheritance

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  id: number;

  constructor(name: string, id: number) {
    super(name);
    this.id = id;
  }
}

const emp = new Employee("Ali", 101);
console.log(emp);
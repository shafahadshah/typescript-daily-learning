// Using super in constructor

class Person {
  constructor(public name: string) {}
}

class Employee extends Person {
  constructor(name: string, public id: number) {
    super(name);
  }
}

const emp = new Employee("Sara", 101);

console.log(emp);
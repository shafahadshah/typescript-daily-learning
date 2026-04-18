// Extending interfaces

interface Person {
  name: string;
}

interface Employee extends Person {
  id: number;
}

const emp: Employee = {
  name: "Ali",
  id: 101
};

console.log(emp);
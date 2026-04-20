// Basic intersection

type Person = {
  name: string;
};

type Employee = {
  id: number;
};

type Staff = Person & Employee;

const staff: Staff = {
  name: "Ali",
  id: 101
};

console.log(staff);
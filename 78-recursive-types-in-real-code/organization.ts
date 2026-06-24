type Employee = {
  name: string;
  subordinates:
    Employee[];
};

const ceo: Employee = {
  name: "Ali",

  subordinates: [
    {
      name: "Sara",
      subordinates: [],
    },
  ],
};

console.log(ceo);
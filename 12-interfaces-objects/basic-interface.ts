// Basic interface

interface User {
  name: string;
  age: number;
}

function printUser(user: User) {
  console.log(user.name, user.age);
}

printUser({ name: "Ali", age: 25 });    
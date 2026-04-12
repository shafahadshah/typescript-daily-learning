// Basic object typing in function

function printUser(user: { name: string; age: number }) {
  console.log(user.name, user.age);
}

printUser({ name: "Ali", age: 25 });
// Optional properties

interface User {
  name: string;
  age?: number;
}

function showUser(user: User) {
  console.log(user.name, user.age ?? "No age");
}

showUser({ name: "Sara" });
showUser({ name: "Zara", age: 28 });
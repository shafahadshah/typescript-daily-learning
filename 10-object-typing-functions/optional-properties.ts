// Optional properties

type User = {
  name: string;
  age?: number;
};

function showUser(user: User) {
  console.log(user.name, user.age ?? "No age");
}

showUser({ name: "John" });
showUser({ name: "Ali", age: 30 });
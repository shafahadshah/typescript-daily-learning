// Optional fields in alias

type User = {
  name: string;
  age?: number;
};

function show(user: User) {
  console.log(user.name, user.age ?? "No age");
}

show({ name: "John" });
show({ name: "Ali", age: 30 });
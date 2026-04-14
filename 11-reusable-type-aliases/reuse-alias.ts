// Reusing same alias

type User = {
  name: string;
  age: number;
};

function greet(user: User) {
  console.log(`Hello ${user.name}`);
}

function getAge(user: User) {
  console.log(user.age);
}

const u = { name: "Sara", age: 22 };

greet(u);
getAge(u);
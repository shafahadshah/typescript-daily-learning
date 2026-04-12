// Using type alias

type User = {
  name: string;
  age: number;
};

function getUser(user: User) {
  return `${user.name} is ${user.age}`;
}

console.log(getUser({ name: "Sara", age: 22 }));
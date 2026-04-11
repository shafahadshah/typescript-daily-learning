// Partial utility type

type User = {
  name: string;
  age: number;
};

function updateUser(user: Partial<User>) {
  console.log(user);
}

updateUser({ name: "Ali" });
updateUser({ age: 22 });
// Readonly properties

interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Ali"
};

console.log(user.id, user.name);

// user.id = 2; ❌ Error
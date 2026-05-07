type User = {
  id: number;
  name: string;
};

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: "Ali",
};

// user.name = "Sara"; ❌ Error

console.log(user);
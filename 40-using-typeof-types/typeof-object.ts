const user = {
  id: 1,
  name: "Ali",
  active: true,
};

type UserType = typeof user;

const newUser: UserType = {
  id: 2,
  name: "Sara",
  active: false,
};

console.log(newUser);
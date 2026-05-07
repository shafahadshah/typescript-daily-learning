function getUser() {
  return {
    id: 1,
    name: "Ali",
  };
}

type User = ReturnType<typeof getUser>;

const user: User = getUser();

console.log(user);
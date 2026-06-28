type User = {
  id: number;
  name: string;
};

function getUser(
  id: number
): User;

function getUser(
  name: string
): User;

function getUser(
  value: number | string
): User {

  return {
    id: 1,
    name: "Ali",
  };
}

console.log(
  getUser(1)
);

console.log(
  getUser("Ali")
);
// Readonly properties

type User = {
  readonly id: number;
  name: string;
};

function displayUser(user: User) {
  console.log(user.id, user.name);
}

const user = { id: 1, name: "Zara" };

displayUser(user);

// user.id = 2; ❌ Error
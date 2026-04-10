// Nullable unions

type User = {
  name: string;
};

function printUser(user: User | null) {
  if (!user) {
    console.log("No user");
    return;
  }
  console.log(user.name);
}

printUser({ name: "Alice" });
printUser(null);
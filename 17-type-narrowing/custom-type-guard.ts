// Custom type guard

type User = { name: string };
type Admin = { name: string; role: string };

function isAdmin(user: User | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function printUser(user: User | Admin) {
  if (isAdmin(user)) {
    console.log(user.role);
  } else {
    console.log(user.name);
  }
}

printUser({ name: "Ali" });
printUser({ name: "Sara", role: "admin" });
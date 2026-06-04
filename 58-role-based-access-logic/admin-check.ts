type Role =
  | "admin"
  | "user";

function isAdmin(
  role: Role
) {
  return role === "admin";
}

console.log(
  isAdmin("admin")
);

console.log(
  isAdmin("user")
);
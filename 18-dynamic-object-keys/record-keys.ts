// Using Record utility

type Roles = "admin" | "user";

const permissions: Record<Roles, string> = {
  admin: "all",
  user: "limited"
};

console.log(permissions.admin);
console.log(permissions.user);
// Record utility type

type Roles = "admin" | "user";

const permissions: Record<Roles, string> = {
  admin: "all",
  user: "limited"
};

console.log(permissions);
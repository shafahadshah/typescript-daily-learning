type Roles = "admin" | "user";

const permissions: Record<
  Roles,
  string[]
> = {
  admin: ["read", "write"],
  user: ["read"],
};

console.log(permissions);
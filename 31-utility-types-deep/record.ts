type Role = "admin" | "user";

const permissions: Record<Role, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read"],
};

console.log(permissions);
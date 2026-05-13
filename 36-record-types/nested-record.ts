type Role = "admin" | "user";

type RolePermissions = Record<
  Role,
  Record<string, boolean>
>;

const permissions: RolePermissions = {
  admin: {
    create: true,
    delete: true,
  },
  user: {
    create: false,
    delete: false,
  },
};

console.log(permissions);
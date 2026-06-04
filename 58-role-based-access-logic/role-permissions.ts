type Role =
  | "admin"
  | "editor"
  | "user";

const permissions = {
  admin: [
    "create",
    "update",
    "delete",
  ],

  editor: [
    "create",
    "update",
  ],

  user: [],
};

console.log(
  permissions.editor
);
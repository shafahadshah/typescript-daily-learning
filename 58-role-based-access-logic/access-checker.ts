type Role =
  | "admin"
  | "editor"
  | "user";

function hasAccess(
  role: Role,
  allowedRoles: Role[]
) {
  return allowedRoles.includes(
    role
  );
}

console.log(
  hasAccess(
    "admin",
    ["admin", "editor"]
  )
);

console.log(
  hasAccess(
    "user",
    ["admin"]
  )
);
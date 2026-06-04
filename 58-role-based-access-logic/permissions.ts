type Permission = {
  create: boolean;
  update: boolean;
  delete: boolean;
};

const adminPermissions:
  Permission = {
    create: true,
    update: true,
    delete: true,
  };

console.log(
  adminPermissions
);
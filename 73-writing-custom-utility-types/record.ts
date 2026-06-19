type MyRecord<
  K extends string,
  T
> = {
  [P in K]: T;
};

const roles:
  MyRecord<
    "admin" | "user",
    boolean
  > = {
    admin: true,
    user: false,
  };

console.log(roles);
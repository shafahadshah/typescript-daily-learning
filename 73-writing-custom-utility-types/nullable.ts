type Nullable<T> =
  T | null;

type UserName =
  Nullable<string>;

const name: UserName =
  null;

console.log(name);
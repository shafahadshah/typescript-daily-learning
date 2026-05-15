type RemoveNull<T> =
  T extends null
    ? never
    : T;

type Result =
  RemoveNull<string | null>;

const value: Result = "Hello";

console.log(value);
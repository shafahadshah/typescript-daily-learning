type IsString<T> =
  T extends string
    ? true
    : false;

type A = IsString<string>;
type B = IsString<number>;

console.log(true as A);
console.log(false as B);
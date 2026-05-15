type Message<T> =
  T extends boolean
    ? "YES/NO"
    : "UNKNOWN";

type A = Message<boolean>;
type B = Message<number>;

console.log("YES/NO" as A);
console.log("UNKNOWN" as B);
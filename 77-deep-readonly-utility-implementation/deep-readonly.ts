type DeepReadonly<T> = {
  readonly [K in keyof T]:
    T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
};

type User = {
  name: string;
  age: number;
};

const user:
  DeepReadonly<User> = {
    name: "Ali",
    age: 20,
  };

console.log(user);
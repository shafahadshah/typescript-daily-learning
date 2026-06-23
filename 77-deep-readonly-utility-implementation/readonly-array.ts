type DeepReadonly<T> = {
  readonly [K in keyof T]:
    T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
};

type Data = {
  items: string[];
};

const data:
  DeepReadonly<Data> = {
    items: [
      "A",
      "B",
      "C",
    ],
};

console.log(data);
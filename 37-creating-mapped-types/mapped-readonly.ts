type Product = {
  title: string;
  price: number;
};

type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};

const product: ReadonlyType<Product> = {
  title: "Laptop",
  price: 999,
};

console.log(product);
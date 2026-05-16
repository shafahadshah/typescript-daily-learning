function printKeys<T>(
  obj: T,
  keys: (keyof T)[]
) {
  console.log(keys);
}

const product = {
  title: "Laptop",
  price: 999,
};

printKeys(product, [
  "title",
  "price",
]);
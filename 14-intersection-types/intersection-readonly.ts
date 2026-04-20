// Intersection with readonly

type Base = {
  readonly id: number;
};

type Item = {
  name: string;
};

type Product = Base & Item;

const product: Product = {
  id: 1,
  name: "Laptop"
};

console.log(product);

// product.id = 2; ❌ Error
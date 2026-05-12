type Product = {
  id: number;
  title: string;
  price: number;
  stock: number;
};

type ProductCard = Pick<
  Product,
  "title" | "price"
>;

const product: ProductCard = {
  title: "iPhone",
  price: 999,
};

console.log(product);
type Product = {
  title: string;
  price: number;
  stock: boolean;
};

type ProductInfo =
  Product["title" | "price"];

const value1: ProductInfo = "Laptop";
const value2: ProductInfo = 999;

console.log(value1);
console.log(value2);
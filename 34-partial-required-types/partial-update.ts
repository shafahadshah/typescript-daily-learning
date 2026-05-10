type Product = {
  title: string;
  price: number;
  stock: number;
};

function updateProduct(
  product: Partial<Product>
) {
  console.log(product);
}

updateProduct({
  price: 999,
});
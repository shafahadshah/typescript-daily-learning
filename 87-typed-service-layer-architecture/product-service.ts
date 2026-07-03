type Product = {
  id: number;
  title: string;
};

class ProductService {
  getProduct(): Product {
    return {
      id: 101,
      title: "Laptop",
    };
  }
}

const service =
  new ProductService();

console.log(
  service.getProduct()
);
type Product = {
  id: number;
  title: string;
};

class ProductRepository {
  getById(id: number): Product {
    return {
      id,
      title: "Laptop",
    };
  }
}

const repository =
  new ProductRepository();

console.log(
  repository.getById(101)
);
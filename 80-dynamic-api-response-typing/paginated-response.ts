type Paginated<T> = {
  total: number;
  page: number;
  data: T[];
};

type Product = {
  id: number;
  title: string;
};

const products:
  Paginated<Product> = {
    total: 2,
    page: 1,

    data: [
      {
        id: 1,
        title: "Laptop",
      },
      {
        id: 2,
        title: "Phone",
      },
    ],
};

console.log(products);
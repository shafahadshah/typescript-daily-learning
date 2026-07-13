type Paginated<T> = {
  page: number;
  total: number;
  data: T[];
};

type Product = {
  id: number;
  title: string;
};

const products:
  Paginated<Product> = {
    page: 1,
    total: 1,

    data: [
      {
        id: 101,
        title: "Laptop",
      },
    ],
};

console.log(
  products.data[0].title
);
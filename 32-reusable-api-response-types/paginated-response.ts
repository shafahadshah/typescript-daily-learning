type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
};

type Product = {
  id: number;
  title: string;
};

const response: PaginatedResponse<Product> = {
  items: [
    { id: 1, title: "Phone" },
    { id: 2, title: "Laptop" },
  ],
  total: 2,
  page: 1,
};

console.log(response);
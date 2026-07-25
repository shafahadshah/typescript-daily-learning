type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type Product = {
  id: number;
  title: string;
};

const response:
  ApiResponse<Product> = {
    success: true,
    data: {
      id: 101,
      title: "Laptop",
    },
};

console.log(
  response.data
); 
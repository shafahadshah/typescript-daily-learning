type ApiRoutes =
  | "users"
  | "products"
  | "orders";

const endpoints: Record<
  ApiRoutes,
  string
> = {
  users: "/api/users",
  products: "/api/products",
  orders: "/api/orders",
};

console.log(endpoints);
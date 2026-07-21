type User = {
  id: number;
  name: string;
};

type ApiResponse<T> = {
  version:
    | "v1"
    | "v2";
  data: T;
};

const user:
  ApiResponse<User> = {
    version: "v1",
    data: {
      id: 1,
      name: "Ali",
    },
};

console.log(
  user
);
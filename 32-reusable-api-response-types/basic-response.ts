type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type User = {
  id: number;
  name: string;
};

const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Ali",
  },
};

console.log(response);
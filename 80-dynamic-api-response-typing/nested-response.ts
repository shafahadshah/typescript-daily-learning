type ApiResponse<T> = {
  success: boolean;

  data: {
    result: T;
  };
};

type User = {
  id: number;
  name: string;
};

const response:
  ApiResponse<User> = {
    success: true,

    data: {
      result: {
        id: 1,
        name: "Ali",
      },
    },
};

console.log(response);
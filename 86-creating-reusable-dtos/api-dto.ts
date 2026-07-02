type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type UserDto = {
  id: number;
  name: string;
};

const response:
  ApiResponse<UserDto> = {
    success: true,
    data: {
      id: 1,
      name: "Ali",
    },
  };

console.log(response);
import {
  User,
  ApiResponse,
} from "./shared-types";

const response:
  ApiResponse<User> = {
    success: true,

    data: {
      id: 1,
      name: "Ali",
      email: "ali@test.com",
    },
  };

console.log(response);
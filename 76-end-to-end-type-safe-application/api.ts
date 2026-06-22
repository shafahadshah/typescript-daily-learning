import {
  User,
  ApiResponse,
} from "./shared-types";

export async function
getUser():
Promise<
  ApiResponse<User>
> {

  return {
    success: true,

    data: {
      id: 1,
      name: "Ali",
      email: "ali@test.com",
    },
  };
}
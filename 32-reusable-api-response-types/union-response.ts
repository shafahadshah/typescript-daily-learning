type SuccessResponse<T> = {
  success: true;
  data: T;
};

type FailedResponse = {
  success: false;
  error: string;
};

type ApiResponse<T> = SuccessResponse<T> | FailedResponse;

const response: ApiResponse<string> = {
  success: true,
  data: "User created",
};

console.log(response);
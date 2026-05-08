type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

const response: ApiResponse<string> = {
  success: true,
  message: "Login successful",
  data: "TOKEN_123",
};

console.log(response);
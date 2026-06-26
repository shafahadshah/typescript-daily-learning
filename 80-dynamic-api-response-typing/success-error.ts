type ApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

const response:
  ApiResponse<string> = {
    success: false,
    error: "Not Found",
};

console.log(response);
type ApiResponse<T> = {
  version:
    | "v1"
    | "v2";
  data: T;
};

const response:
  ApiResponse<string> = {
    version: "v2",
    data: "Hello API",
};

console.log(
  response
);
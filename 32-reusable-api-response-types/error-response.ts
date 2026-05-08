type ErrorResponse = {
  success: false;
  error: string;
};

const response: ErrorResponse = {
  success: false,
  error: "Invalid credentials",
};

console.log(response);
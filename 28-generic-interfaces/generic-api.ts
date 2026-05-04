// Generic API response interface

interface ApiResponse<T> {
  status: string;
  data: T;
}

const res: ApiResponse<{ name: string }> = {
  status: "success",
  data: { name: "Ali" }
};

console.log(res.status);
console.log(res.data.name);
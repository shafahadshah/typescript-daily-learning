type ApiResponse<T> =
  T extends string
    ? { message: T }
    : { data: T };

type A = ApiResponse<string>;
type B = ApiResponse<number[]>;

const res1: A = {
  message: "Success",
};

const res2: B = {
  data: [1, 2, 3],
};

console.log(res1);
console.log(res2);
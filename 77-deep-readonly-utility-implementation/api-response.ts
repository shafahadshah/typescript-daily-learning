type DeepReadonly<T> = {
  readonly [K in keyof T]:
    T[K] extends object
      ? DeepReadonly<T[K]>
      : T[K];
};

type ApiResponse = {
  success: boolean;
  user: {
    id: number;
    name: string;
  };
};

const response:
  DeepReadonly<ApiResponse> = {
    success: true,
    user: {
      id: 1,
      name: "Ali",
    },
  };

console.log(response);
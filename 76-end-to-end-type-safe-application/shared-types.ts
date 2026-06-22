export type User = {
  id: number;
  name: string;
  email: string;
};

export type ApiResponse<T> = {
  success: boolean;
  data: T;
};
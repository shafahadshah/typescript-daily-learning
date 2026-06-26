type FetchResult<T> = {
  loading: boolean;
  data?: T;
  error?: string;
};

type User = {
  id: number;
  name: string;
};

const result:
  FetchResult<User> = {
    loading: false,

    data: {
      id: 1,
      name: "Ali",
    },
};

console.log(result);
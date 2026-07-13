type Paginated<T> = {
  page: number;
  total: number;
  data: T[];
};

type User = {
  id: number;
  name: string;
};

const users:
  Paginated<User> = {
    page: 1,
    total: 2,

    data: [
      {
        id: 1,
        name: "Ali",
      },
      {
        id: 2,
        name: "Sara",
      },
    ],
};

console.log(users);
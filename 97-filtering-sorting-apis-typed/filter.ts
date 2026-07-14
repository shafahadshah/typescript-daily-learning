type User = {
  id: number;
  name: string;
};

type Filter = {
  name?: string;
};

const filter: Filter = {
  name: "Ali",
};

console.log(filter);
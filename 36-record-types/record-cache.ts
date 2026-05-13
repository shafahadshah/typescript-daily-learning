type User = {
  id: number;
  name: string;
};

const userCache: Record<
  number,
  User
> = {
  1: { id: 1, name: "Ali" },
  2: { id: 2, name: "Sara" },
};

console.log(userCache);
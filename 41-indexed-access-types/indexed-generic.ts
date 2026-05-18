type PropertyType<
  T,
  K extends keyof T
> = T[K];

type User = {
  id: number;
  name: string;
};

type UserId =
  PropertyType<User, "id">;

const id: UserId = 1;

console.log(id);
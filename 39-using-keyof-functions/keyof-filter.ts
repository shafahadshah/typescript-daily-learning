type User = {
  id: number;
  name: string;
  active: boolean;
};

function filterBy<
  T,
  K extends keyof T
>(
  items: T[],
  key: K,
  value: T[K]
) {
  return items.filter(
    (item) => item[key] === value
  );
}

const users: User[] = [
  {
    id: 1,
    name: "Ali",
    active: true,
  },
  {
    id: 2,
    name: "Sara",
    active: false,
  },
];

console.log(
  filterBy(users, "active", true)
);
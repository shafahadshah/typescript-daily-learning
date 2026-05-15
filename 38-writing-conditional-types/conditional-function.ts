type GetReturn<T> =
  T extends (...args: any[]) => infer R
    ? R
    : never;

function getUser() {
  return {
    name: "Ali",
  };
}

type Result = GetReturn<typeof getUser>;

const user: Result = {
  name: "Ali",
};

console.log(user);
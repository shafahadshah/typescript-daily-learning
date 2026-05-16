function pickFields<
  T,
  K extends keyof T
>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;

  keys.forEach((key) => {
    result[key] = obj[key];
  });

  return result;
}

const user = {
  id: 1,
  name: "Ali",
  age: 25,
};

console.log(
  pickFields(user, [
    "name",
    "age",
  ])
);
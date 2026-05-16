function updateValue<
  T,
  K extends keyof T
>(
  obj: T,
  key: K,
  value: T[K]
) {
  obj[key] = value;
}

const user = {
  name: "Sara",
  age: 22,
};

updateValue(user, "name", "Ali");
updateValue(user, "age", 30);

console.log(user);
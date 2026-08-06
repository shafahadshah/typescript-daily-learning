type Flag<T> = {
  name: T;
  enabled: boolean;
};

const flag:
  Flag<string> = {
    name: "analytics",
    enabled: true,
};

console.log(
  flag
);
type Validator<T> = (
  value: T
) => boolean;

const isPositive:
  Validator<number> =
  (value) => {
    return value > 0;
  };

console.log(
  isPositive(10)
);

console.log(
  isPositive(-5)
);
type Validator<T> = (
  value: T
) => boolean;

function validate<T>(
  value: T,
  validator:
    Validator<T>
): boolean {
  return validator(value);
}

console.log(
  validate(
    "TypeScript",
    text =>
      text.length > 5
  )
);
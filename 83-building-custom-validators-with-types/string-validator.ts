type Validator<T> = (
  value: T
) => boolean;

const isNotEmpty:
  Validator<string> =
  (value) => {
    return (
      value.trim()
        .length > 0
    );
  };

console.log(
  isNotEmpty("Ali")
);

console.log(
  isNotEmpty("")
);
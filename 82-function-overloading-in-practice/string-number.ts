function format(
  value: string
): string;

function format(
  value: number
): string;

function format(
  value: string | number
): string {

  return String(value);
}

console.log(
  format("Ali")
);

console.log(
  format(25)
);
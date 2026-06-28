function add(
  a: number,
  b: number
): number;

function add(
  a: string,
  b: string
): string;

function add(
  a: number | string,
  b: number | string
) {

  return (a as never) + (b as never);
}

console.log(
  add(10, 20)
);

console.log(
  add("Hello ", "TS")
);
function findItem(
  items: string[],
  value: string
): string | undefined;

function findItem(
  items: number[],
  value: number
): number | undefined;

function findItem(
  items: unknown[],
  value: unknown
) {
  return items.find(
    item => item === value
  );
}

console.log(
  findItem(
    ["A", "B"],
    "A"
  )
);

console.log(
  findItem(
    [1, 2, 3],
    2
  )
);
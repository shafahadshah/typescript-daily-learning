// Function overload with unions

function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return typeof value === "number"
    ? value.toFixed(2)
    : value.toUpperCase();
}

console.log(format(10));
console.log(format("hello"));
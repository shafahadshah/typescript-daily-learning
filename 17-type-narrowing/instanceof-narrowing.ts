// Narrowing using instanceof

function printDate(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value.toUpperCase());
  }
}

printDate(new Date("2024-01-01"));
printDate("hello");
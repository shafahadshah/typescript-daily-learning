// Alias with union types

type ID = string | number;

function printId(id: ID) {
  console.log(id);
}

printId(101);
printId("abc123");
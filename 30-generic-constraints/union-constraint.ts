// Constraint with union types

function printId<T extends string | number>(id: T) {
  console.log(id);
}

printId("A123");
printId(456);

// printId(true); ❌ Error
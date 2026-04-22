// Handling undefined

function printAge(age?: number) {
  if (age === undefined) {
    console.log("No age");
  } else {
    console.log(age);
  }
}

printAge(25);
printAge();
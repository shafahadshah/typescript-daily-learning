// Basic null check

function printName(name: string | null) {
  if (name === null) {
    console.log("No name");
  } else {
    console.log(name);
  }
}

printName("Ali");
printName(null);
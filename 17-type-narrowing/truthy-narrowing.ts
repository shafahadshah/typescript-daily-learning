// Truthy narrowing

function printLength(text: string | null) {
  if (text) {
    console.log(text.length);
  } else {
    console.log("No text");
  }
}

printLength("Hello");
printLength(null);
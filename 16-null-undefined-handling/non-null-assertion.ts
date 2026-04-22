// Non-null assertion

function printLength(text: string | null) {
  console.log(text!.length);
}

printLength("Hello");

// printLength(null); ❌ Runtime error if used
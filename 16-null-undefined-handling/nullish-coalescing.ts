// Nullish coalescing

function getValue(value: string | null | undefined) {
  const result = value ?? "Default value";
  console.log(result);
}

getValue("Hello");
getValue(null);
getValue(undefined);
 type Fields =
  "name" | "email";

type FormFields =
  `${Fields}-field`;

const field: FormFields =
  "email-field";

console.log(field);
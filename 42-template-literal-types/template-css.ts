type Size =
  "sm" | "md" | "lg";

type ButtonClass =
  `btn-${Size}`;

const btn: ButtonClass =
  "btn-lg";

console.log(btn);
const input =
  document.querySelector(
    "#username"
  ) as HTMLInputElement;

input.addEventListener(
  "input",
  (event: Event) => {
    console.log(
      input.value
    );
  }
);
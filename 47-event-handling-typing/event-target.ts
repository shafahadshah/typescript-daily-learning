    const input =
  document.querySelector(
    "#email"
  );

if (input) {
  input.addEventListener(
    "input",
    (event) => {
      const target =
        event.currentTarget
        as HTMLInputElement;

      console.log(
        target.value
      );
    }
  );
}
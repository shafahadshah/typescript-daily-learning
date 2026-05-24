function handleClick(
  event: MouseEvent
) {
  console.log(
    "Button clicked"
  );
}

const button =
  document.querySelector(
    "button"
  ) as HTMLButtonElement;

button.addEventListener(
  "click",
  handleClick
);
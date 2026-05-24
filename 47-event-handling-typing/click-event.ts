const button =
  document.querySelector(
    "button"
  ) as HTMLButtonElement;

button.addEventListener(
  "click",
  (event: MouseEvent) => {
    console.log("Clicked");
  }
);  
const form =
  document.querySelector(
    "form"
  ) as HTMLFormElement;

form.addEventListener(
  "submit",
  (event: SubmitEvent) => {
    event.preventDefault();

    console.log(
      "Form submitted"
    );
  }
);
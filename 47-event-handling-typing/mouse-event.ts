document.addEventListener(
  "mousemove",
  (event: MouseEvent) => {
    console.log(
      event.clientX,
      event.clientY
    );
  }
);
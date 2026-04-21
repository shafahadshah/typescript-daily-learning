// Event target assertion

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  console.log(target.tagName);
});
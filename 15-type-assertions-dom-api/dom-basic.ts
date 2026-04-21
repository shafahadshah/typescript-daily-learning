// Basic DOM type assertion

const el = document.getElementById("title") as HTMLHeadingElement;

el.innerText = "Hello TypeScript";
console.log(el.innerText);
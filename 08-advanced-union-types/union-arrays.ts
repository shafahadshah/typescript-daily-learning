// Union types in arrays

type Item = string | number;

const items: Item[] = [1, "two", 3, "four"];

items.forEach(item => {
  if (typeof item === "string") {
    console.log(item.toUpperCase());
  } else {
    console.log(item * 2);
  }
});
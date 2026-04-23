// Narrowing using 'in' operator

type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

speak({ bark: () => console.log("Woof!") });
speak({ meow: () => console.log("Meow!") });
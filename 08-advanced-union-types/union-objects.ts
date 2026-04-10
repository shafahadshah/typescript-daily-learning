// Union with different object shapes

type Dog = { type: "dog"; bark: () => void };
type Cat = { type: "cat"; meow: () => void };

type Animal = Dog | Cat;

function speak(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog: Dog = {
  type: "dog",
  bark: () => console.log("Woof!")
};

const cat: Cat = {
  type: "cat",
  meow: () => console.log("Meow!")
};

speak(dog);
speak(cat);
type Dog = {
  kind: "dog";
  bark: () => void;
};

type Cat = {
  kind: "cat";
  meow: () => void;
};

type Pet = Dog | Cat;

function handlePet(pet: Pet) {
  if (pet.kind === "dog") {
    pet.bark();
  } else {
    pet.meow();
  }
}
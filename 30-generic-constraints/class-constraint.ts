// Constraint with class

class Animal {
  name = "Animal";
}

function showAnimal<T extends Animal>(a: T) {
  console.log(a.name);
}

showAnimal(new Animal());
// Basic abstract class

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound() {
    return "Woof";
  }
}

const d = new Dog();
console.log(d.makeSound());
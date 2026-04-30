// Inheriting methods

class Animal {
  speak() {
    return "Some sound";
  }
}

class Dog extends Animal {}

const d = new Dog();

console.log(d.speak());
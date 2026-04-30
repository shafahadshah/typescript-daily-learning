// Method overriding

class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof";
  }
}

const d = new Dog();

console.log(d.speak());
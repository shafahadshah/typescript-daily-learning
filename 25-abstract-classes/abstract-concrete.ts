// Abstract + concrete method

abstract class Animal {
  abstract sound(): string;

  move() {
    return "Moving...";
  }
}

class Cat extends Animal {
  sound() {
    return "Meow";
  }
}

const c = new Cat();

console.log(c.sound());
console.log(c.move());
// Multi-level inheritance

class Animal {
  move() {
    return "Moving";
  }
}

class Dog extends Animal {
  bark() {
    return "Woof";
  }
}

class Puppy extends Dog {}

const p = new Puppy();

console.log(p.move());
console.log(p.bark());
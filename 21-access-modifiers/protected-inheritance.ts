// Protected with inheritance

class Animal {
  protected sound: string;

  constructor(sound: string) {
    this.sound = sound;
  }
}

class Dog extends Animal {
  speak() {
    return this.sound;
  }
}

const d = new Dog("Woof");

console.log(d.speak());
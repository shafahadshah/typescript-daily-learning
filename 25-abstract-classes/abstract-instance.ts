// Cannot create abstract instance

abstract class Vehicle {
  abstract start(): string;
}

// const v = new Vehicle(); ❌ Error

class Car extends Vehicle {
  start() {
    return "Car started";
  }
}

const car = new Car();
console.log(car.start());
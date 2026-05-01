// Override abstract method

abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  constructor(public size: number) {
    super();
  }

  area() {
    return this.size * this.size;
  }
}

const s = new Square(4);
console.log(s.area());
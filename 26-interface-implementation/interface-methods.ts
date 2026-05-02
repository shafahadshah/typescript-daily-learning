// Interface with methods

interface Shape {
  area(): number;
}

class Square implements Shape {
  constructor(public size: number) {}

  area() {
    return this.size * this.size;
  }
}

const s = new Square(4);

console.log(s.area());
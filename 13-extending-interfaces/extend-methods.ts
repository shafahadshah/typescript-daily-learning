// Extending interface with methods

interface Shape {
  area(): number;
}

interface Square extends Shape {
  size: number;
}

const sq: Square = {
  size: 4,
  area() {
    return this.size * this.size;
  }
};

console.log(sq.area());
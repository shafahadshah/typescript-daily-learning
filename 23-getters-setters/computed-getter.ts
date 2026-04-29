// Computed getter

class Rectangle {
  constructor(public width: number, public height: number) {}

  get area() {
    return this.width * this.height;
  }
}

const r = new Rectangle(4, 5);

console.log(r.area);
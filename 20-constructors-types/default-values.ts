// Default values in constructor

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number = 0) {
    this.name = name;
    this.price = price;
  }
}

const p1 = new Product("Book");
const p2 = new Product("Pen", 50);

console.log(p1);
console.log(p2);
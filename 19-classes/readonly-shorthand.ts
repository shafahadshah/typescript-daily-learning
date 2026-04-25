// Readonly + parameter properties

class Product {
  constructor(
    public name: string,
    public price: number,
    readonly id: number
  ) {}
}

const p = new Product("Laptop", 50000, 1);

console.log(p);

// p.id = 2; ❌ Error
// Readonly with constructor shorthand

class Product {
  constructor(
    public name: string,
    readonly id: number
  ) {}
}

const p = new Product("Laptop", 101);

console.log(p);

// p.id = 200; ❌ Error
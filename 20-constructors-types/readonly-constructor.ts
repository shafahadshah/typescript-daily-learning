// Readonly in constructor

class Order {
  constructor(
    public item: string,
    readonly id: number
  ) {}
}

const o = new Order("Laptop", 1);

console.log(o);

// o.id = 2; ❌ Error
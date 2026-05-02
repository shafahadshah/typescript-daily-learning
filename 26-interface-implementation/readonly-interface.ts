// Readonly in interface

interface Product {
  readonly id: number;
  name: string;
}

class Item implements Product {
  constructor(public readonly id: number, public name: string) {}
}

const item = new Item(1, "Laptop");

console.log(item);

// item.id = 2; ❌ Error
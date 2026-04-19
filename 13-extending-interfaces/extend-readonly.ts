// Extending readonly properties

interface Base {
  readonly id: number;
}

interface Item extends Base {
  name: string;
}

const item: Item = {
  id: 1,
  name: "Product"
};

console.log(item);

// item.id = 2; ❌ Error
type Product = {
  id: number;
  title: string;
};

const jsonData = `
[
  {
    "id": 1,
    "title": "Phone"
  },
  {
    "id": 2,
    "title": "Laptop"
  }
]
`;

const products: Product[] =
  JSON.parse(jsonData);

console.log(products);
type Category = {
  name: string;
  children: Category[];
};

const categories: Category = {
  name: "Electronics",

  children: [
    {
      name: "Phones",
      children: [],
    },
    {
      name: "Laptops",
      children: [],
    },
  ],
};

console.log(categories);
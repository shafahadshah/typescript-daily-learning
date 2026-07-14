type Query = {
  filter?: {
    name?: string;
  };

  sort?: {
    by: "id" | "name";
    order: "asc" | "desc";
  };
};

const query: Query = {
  filter: {
    name: "Ali",
  },

  sort: {
    by: "name",
    order: "asc",
  },
};

console.log(query);
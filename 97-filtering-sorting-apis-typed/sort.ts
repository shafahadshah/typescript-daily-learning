type SortOrder =
  | "asc"
  | "desc";

type Sort = {
  by: "id" | "name";
  order: SortOrder;
};

const sort: Sort = {
  by: "name",
  order: "asc",
};

console.log(sort);
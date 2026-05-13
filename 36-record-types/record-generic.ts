type DataMap<T> = Record<
  string,
  T
>;

const products: DataMap<number> = {
  phone: 999,
  laptop: 1999,
};

console.log(products);
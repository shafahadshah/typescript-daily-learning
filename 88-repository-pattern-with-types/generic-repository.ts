class Repository<T> {

  constructor(
    private data: T
  ) {}

  get(): T {
    return this.data;
  }
}

const repository =
  new Repository({
    id: 1,
    name: "Ali",
  });

console.log(
  repository.get()
);
    class BaseRepository<T> {

  constructor(
    private items: T[]
  ) {}

  getAll(): T[] {
    return this.items;
  }
}

const repository =
  new BaseRepository([
    {
      id: 1,
      name: "Ali",
    },
  ]);

console.log(
  repository.getAll()
);
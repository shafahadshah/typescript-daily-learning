class Service<T> {

  constructor(
    private item: T
  ) {}

  get(): T {
    return this.item;
  }
}

const service =
  new Service({
    id: 1,
    name: "Ali",
  });

console.log(
  service.get()
);
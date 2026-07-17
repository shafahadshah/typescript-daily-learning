class Cache<T> {

  private value!: T;

  set(
    value: T
  ): void {

    this.value = value;
  }

  get(): T {

    return this.value;
  }
}

const cache =
  new Cache<string>();

cache.set("Hello");

console.log(
  cache.get()
);
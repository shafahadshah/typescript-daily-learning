// Fixed version

class DataStorage<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll() {
    return this.data;
  }
}

const store = new DataStorage<number>();

store.add(1);
store.add(2);

console.log(store.getAll());
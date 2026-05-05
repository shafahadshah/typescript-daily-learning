// Avoid name conflict

class DataStorage<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  getAll() {
    return this.data;
  }
}

const store = new DataStorage<string>();

store.add("A");
store.add("B");

console.log(store.getAll());
// Generic interface with methods
// Fixed version

interface DataStorage<T> {
  add(item: T): void;
}

class StringStorage implements DataStorage<string> {
  private data: string[] = [];

  add(item: string) {
    this.data.push(item);
    console.log(this.data);
  }
}

const store = new StringStorage();

store.add("A");
store.add("B");
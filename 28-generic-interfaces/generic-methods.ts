// Generic interface with methods

interface Storage<T> {
  add(item: T): void;
}

class StringStorage implements Storage<string> {
  private data: string[] = [];

  add(item: string) {
    this.data.push(item);
    console.log(this.data);
  }
}

const store = new StringStorage();

store.add("A");
store.add("B");
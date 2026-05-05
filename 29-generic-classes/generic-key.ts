// Generic with keyof

class ObjectHelper<T> {
  constructor(private obj: T) {}

  getValue<K extends keyof T>(key: K): T[K] {
    return this.obj[key];
  }
}

const user = { name: "Ali", age: 25 };

const helper = new ObjectHelper(user);

console.log(helper.getValue("name"));
console.log(helper.getValue("age"));
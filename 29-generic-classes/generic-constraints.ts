// Generic constraints

class LengthChecker<T extends { length: number }> {
  constructor(public item: T) {}

  getLength() {
    return this.item.length;
  }
}

const obj = new LengthChecker("Hello");

console.log(obj.getLength());
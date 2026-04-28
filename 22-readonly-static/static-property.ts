// Static property

class Counter {
  static count = 0;

  increment() {
    Counter.count++;
  }
}

const c1 = new Counter();
const c2 = new Counter();

c1.increment();
c2.increment();

console.log(Counter.count);
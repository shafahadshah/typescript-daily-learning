// Public, private, protected

class Account {
  public name: string;
  private balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new Account("Ali", 1000);

console.log(acc.name);
console.log(acc.getBalance());

// console.log(acc.balance); ❌ Error
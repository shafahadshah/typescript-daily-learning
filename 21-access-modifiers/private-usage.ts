// Private properties

class Account {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new Account(1000);

console.log(acc.getBalance());

// console.log(acc.balance); ❌ Error
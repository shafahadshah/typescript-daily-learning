// Private field with getter/setter

class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }

  get currentBalance() {
    return this.balance;
  }

  set currentBalance(value: number) {
    if (value < 0) {
      console.log("Cannot set negative balance");
      return;
    }
    this.balance = value;
  }
}

const acc = new BankAccount();

acc.deposit(500);
console.log(acc.currentBalance);

acc.currentBalance = -100; // invalid
class BankAccount {
  constructor() {
    this.balance = 0;

    this.transaction = {
      type: null,
      amount: 0,
      date: null,
      balance: 0
    };
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    this.createTransaction("deposit", amount);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.createTransaction("credit", amount);
  }

  createTransaction(type, amount) {
    this.transaction = {
      type: type,
      amount: amount,
      date: new Date(),
      balance: this.balance
    };
  }

}

module.exports = BankAccount;
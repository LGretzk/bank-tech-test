class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactionHistory = [];

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
    this.transactionHistory.push(this.transaction);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.createTransaction("credit", amount);
  }

  createTransaction(type, amount) {
    this.transaction = {
      type: type,
      amount: amount,
      date: new Date().toLocaleDateString("en-GB"),
      balance: this.balance
    };
  }

}

module.exports = BankAccount;
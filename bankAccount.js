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
    this.createTransaction("credit", amount);
    this.transactionHistory.push(this.transaction);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.createTransaction("debit", amount);
    this.transactionHistory.push(this.transaction);
  }

  printStatement() {
    let test = this.transactionHistory.map(transaction => {
      if (transaction.type === "credit") {
        return `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}`
      }
      return `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}`
    });
    return `${this.printHeading()} \n ${test.join()}`;
  }

  printHeading() {
    return `date || credit || debit || balance`;
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
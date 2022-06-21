class BankAccount {
  constructor(TransactionHistory, Transaction) {
    this.transactionHistory = new TransactionHistory(Transaction);
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    this.transactionHistory.add("credit", amount, this.balance);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactionHistory.add("debit", amount, this.balance);
  }

  printStatement() {
    let test = this.transactionHistory.map(transaction => {
      if (transaction.type === "credit") {
        return `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)} \n`
      }
      return `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)} \n`
    });
    return `${this.printHeading()}${test.reverse().join('')}`;
  }

  printHeading() {
    return `date || credit || debit || balance \n`;
  }
};

module.exports = BankAccount;
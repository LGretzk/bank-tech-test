class BankAccount {
  constructor(TransactionHistory, Transaction, PrintStatement) {
    this.transactionHistory = new TransactionHistory(Transaction);
    this.printStatement = new PrintStatement;
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
    this.printStatement.create(this.transactionHistory.log);
  }
};

module.exports = BankAccount;
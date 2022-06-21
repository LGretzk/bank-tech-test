class BankAccount {
  constructor(TransactionHistory, PrintStatement) {
    this.transactionHistory = TransactionHistory;
    this.printStatement = PrintStatement;
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

  getPrintStatement() {
    this.printStatement.create(this.transactionHistory.log);
  }
};

module.exports = BankAccount;
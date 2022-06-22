transaction = {
  type: credit/debit
  amount: integer,
  date: dateNow(),
  balance: integer
}

class BankAccount {
  constructor() {
    balance = 0;
    transaction history = [];
    transaction = {};
  }
  deposit(amount)
  withdraw(amount)
  printStatement()
}

Splitting the class

BankAccount {
  constructor(TransactionHistory) {
    balance = 0;
    transactionHistory = new TransactionHistory;
  }

  deposit(amount) {
    transactionHistory.add('credit', amount)
  }

  withdraw(amount) {
    transactionHistory.add('debit', amount)
  }
}

TransactionHistory {
  constructor() {
    transactions = []
  }

  add(type, amount) {
    newTransaction(type, amount);
    this.transactions.push(newTransaction)
  }

  newTransaction
}


Input:
- deposit 1000 on 10/01/2023
- deposit 2000 on 13/01/2023
- withdrawal 500 on 14/01/2023

Output:
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
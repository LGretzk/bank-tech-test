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
    this.transaction = {
      type: "deposit",
      amount: amount,
      date: new Date(),
      balance: this.balance      
    };
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

module.exports = BankAccount;
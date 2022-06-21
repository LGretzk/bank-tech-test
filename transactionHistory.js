class TransactionHistory {
  constructor() {  
    this.log = [];
  }

  add(type, amount, balance) {
    this.log.push(this.newTransaction(type, amount, balance));
  }

  newTransaction(type, amount, balance) {
    return {
      type: type,
      amount: amount,
      date: new Date().toLocaleDateString("en-GB"),
      balance: balance
    };
  }
};

module.exports = TransactionHistory;;
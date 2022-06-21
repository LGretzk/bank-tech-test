class TransactionHistory {
  constructor(Transaction) {
    console.log(new Transaction);
    this.transaction = new Transaction;
    
    this.log = [];
  }

  add(type, amount, balance) {
    this.log.push(this.transaction.new(type, amount, balance));
  }
};

module.exports = TransactionHistory;;
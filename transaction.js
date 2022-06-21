class Transaction {
  new(type, amount, balance) {
    return {
      type: type,
      amount: amount,
      date: new Date().toLocaleDateString("en-GB"),
      balance: balance
    };
  }
};

module.exports = Transaction;
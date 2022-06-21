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

let transaction = new Transaction;
let newTrans = transaction.new("credit", 50, 50);

console.log(transaction);
console.log(newTrans);

module.exports = Transaction;
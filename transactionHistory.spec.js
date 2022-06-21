const TransactionHistory = require('./transactionHistory');
const Transaction = require('./transaction');

describe("TransactionHistory", () => {
  beforeEach(() => {
    testTransactionHistory = new TransactionHistory(Transaction);
  });

  it("saves a transaction", () => {
    let date = new Date().toLocaleDateString("en-GB");
    testTransactionHistory.add("credit", 50, 50);
    const deposit = {
      type: "credit",
      amount: 50,
      date: date,
      balance: 50
    };

    expect(testTransactionHistory.log).toEqual([deposit]);
  });

  it("saves multiple transactions", () => {
    let date = new Date().toLocaleDateString("en-GB");
    testTransactionHistory.add("credit", 50, 50);
    const deposit = {
      type: "credit",
      amount: 50,
      date: date,
      balance: 50
    };
    testTransactionHistory.add("debit", 30, 20);  
    const withdrawal = {
      type: "debit",
      amount: 30,
      date: date,
      balance: 20
    };

    expect(testTransactionHistory.log).toEqual([deposit, withdrawal]);
  });
});
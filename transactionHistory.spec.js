const TransactionHistory = require('./transactionHistory');
const Transaction = require('./transaction');

describe("TransactionHistory", () => {
  beforeEach(() => {
    testTransactionHistory = new TransactionHistory(Transaction);
    testTransactionHistory.add("credit", 50, 50);
  });

  it("saves a transaction", () => {
    let date = new Date().toLocaleDateString("en-GB");
    const testHistory = {
      type: "credit",
      amount: 50,
      date: date,
      balance: 50
    };

    expect(testTransactionHistory.log).toEqual([testHistory]);
  });

  xit("saves multiple transactions", () => {
    testBankAccount.withdraw(30);
    let date = new Date().toLocaleDateString("en-GB");
    const deposit = {
      type: "credit",
      amount: 50,
      date: date,
      balance: 50
    };
    const withdrawal = {
      type: "debit",
      amount: 30,
      date: date,
      balance: 20
    };

    expect(testBankAccount.transactionHistory).toEqual([deposit, withdrawal]);
  });
});
const Transaction = require('./transaction');

describe("Transaction", () => {

  describe("type credit", () => {
    beforeEach(() => {
      testTransaction = new Transaction;
      transaction = testTransaction.new("credit", 50, 50);
    });
    
    it("creates a transaction with type and amount", () => {
      expect(transaction.type).toBe("credit");
      expect(transaction.amount).toBe(50);
    });
  
    it("creates a transaction with type, amount and balance", () => {
      expect(transaction.balance).toBe(50);
    });
  
    it("creates a transaction with type, amount, balance and date", () => {
      let date = new Date().toLocaleDateString("en-GB");
      expect(transaction.date).toEqual(date);
    });
  });

  describe("type debit", () => {
    beforeEach(() => {
      testTransaction = new Transaction;
      transaction = testTransaction.new("debit", 40, 10);
    });

    it("ceates a transaction with type, amount, balance and date", () => {
      let date = new Date().toLocaleDateString("en-GB");
  
      expect(transaction.type).toBe("debit");
      expect(transaction.amount).toBe(40);
      expect(transaction.balance).toBe(10);
      expect(transaction.date).toEqual(date);
    });
  })
});
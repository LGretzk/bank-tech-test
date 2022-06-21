const BankAccount = require('./bankAccount');

describe("BankAccount", () => {

  it("initiates an instance of BankAccount", () => {
    testBankAccount = new BankAccount;
    expect(testBankAccount).toBeInstanceOf(BankAccount);
  });
  
  describe("deposit", () => {
    beforeEach(() => {
      testBankAccount = new BankAccount;
      testBankAccount.deposit(50);
    });

    it("accepts 50 and increases balance by 50", () => {
      expect(testBankAccount.getBalance()).toBe(50);
    });

    it("creates a transaction with type and amount", () => {
      expect(testBankAccount.transaction.type).toBe("credit");
      expect(testBankAccount.transaction.amount).toBe(50);
    });
  
    it("creates a transaction with type, amount and balance", () => {
      expect(testBankAccount.transaction.balance).toBe(50);
    });
  
    it("creates a transaction with type, amount, balance and date", () => {
      let date = new Date().toLocaleDateString("en-GB");
      expect(testBankAccount.transaction.date).toEqual(date);
    });
  });

  describe("withdrawal", () => {
    beforeEach(() => {
      testBankAccount = new BankAccount;
      testBankAccount.deposit(50);
      testBankAccount.withdraw(40);
    });

    it("accepts 40 and decreases balance by 40", () => {
      expect(testBankAccount.getBalance()).toBe(10);
    });

    it("ceates a transaction with type, amount, balance and date", () => {
      let date = new Date().toLocaleDateString("en-GB");
  
      expect(testBankAccount.transaction.type).toBe("debit");
      expect(testBankAccount.transaction.amount).toBe(40);
      expect(testBankAccount.transaction.balance).toBe(10);
      expect(testBankAccount.transaction.date).toEqual(date);
    });
  });
  
  describe("transaction history", () => {
    beforeEach(() => {
      testBankAccount = new BankAccount;
      testBankAccount.deposit(50);
    });

    it("saves a transaction", () => {
      let date = new Date().toLocaleDateString("en-GB");
      const testHistory = {
        type: "credit",
        amount: 50,
        date: date,
        balance: 50
      };

      expect(testBankAccount.transactionHistory).toEqual([testHistory]);
    });

    it("saves multiple transactions", () => {
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

  describe("printStatement", () => {
    beforeEach(() => {
      testBankAccount = new BankAccount;
    });

    it("prints a statement with one deposit", () => {
      testBankAccount.deposit(50);
      let date = new Date().toLocaleDateString("en-GB");
      const depositHistory = {
        type: "credit",
        amount: 50,
        date: date,
        balance: 50
      };
  
      expect(testBankAccount.printStatement()).toEqual(
        `date || credit || debit || balance \n ${date} || 50.00 || || 50.00`);
    });

    it("prints a statement with one withdrawal", () => {
      testBankAccount.withdraw(10);
      let date = new Date().toLocaleDateString("en-GB");
      const withdrawalHistory = {
        type: "debit",
        amount: 10,
        date: date,
        balance: -10
      };
      expect(testBankAccount.printStatement()).toEqual(
        `date || credit || debit || balance \n ${date} || || 10.00 || -10.00`);
    });
  });
});
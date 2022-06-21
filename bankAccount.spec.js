const BankAccount = require('./bankAccount');
const TransactionHistory = require('./transactionHistory');
const Transaction = require('./transaction');

describe("BankAccount", () => {

  it("initiates an instance of BankAccount", () => {
    testBankAccount = new BankAccount(TransactionHistory, Transaction);
    expect(testBankAccount).toBeInstanceOf(BankAccount);
  });
  
  describe("deposit", () => {
    it("accepts 50 and increases balance by 50", () => {
      testBankAccount = new BankAccount(TransactionHistory, Transaction);
      testBankAccount.deposit(50);
      expect(testBankAccount.getBalance()).toBe(50);
    });
  });

  describe("withdrawal", () => {
    it("accepts 40 and decreases balance by 40", () => {
      testBankAccount = new BankAccount(TransactionHistory, Transaction);
      testBankAccount.deposit(50);
      testBankAccount.withdraw(40);
      expect(testBankAccount.getBalance()).toBe(10);
    });
  });
  
  describe("printStatement", () => {
    beforeEach(() => {
      testBankAccount = new BankAccount(TransactionHistory, Transaction);
    });

    it("prints a statement with one deposit", () => {
      testBankAccount.deposit(50);
      let date = new Date().toLocaleDateString("en-GB");
  
      expect(testBankAccount.printStatement()).toEqual(
        `date || credit || debit || balance \n${date} || 50.00 || || 50.00 \n`
      );
    });

    it("prints a statement with one withdrawal", () => {
      testBankAccount.withdraw(10);
      let date = new Date().toLocaleDateString("en-GB");

      expect(testBankAccount.printStatement()).toEqual(
        `date || credit || debit || balance \n${date} || || 10.00 || -10.00 \n`
      );
    });

    it("prints a statement with multiple transactions", () => {
      let date = new Date().toLocaleDateString("en-GB");
      testBankAccount.deposit(1000);
      testBankAccount.deposit(2000);
      testBankAccount.withdraw(500);

      expect(testBankAccount.printStatement()).toBe(
        `date || credit || debit || balance \n${date} || || 500.00 || 2500.00 \n${date} || 2000.00 || || 3000.00 \n${date} || 1000.00 || || 1000.00 \n`        
      );
    });
  });
});
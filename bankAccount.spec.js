const BankAccount = require('./bankAccount');
const TransactionHistory = require('./transactionHistory');
const Transaction = require('./transaction');
const PrintStatement = require('./printStatement');

describe("BankAccount", () => {

  it("initiates an instance of BankAccount", () => {
    testBankAccount = new BankAccount(TransactionHistory, Transaction, PrintStatement);
    expect(testBankAccount).toBeInstanceOf(BankAccount);
  });
  
  describe("deposit", () => {
    it("accepts 50 and increases balance by 50", () => {
      testBankAccount = new BankAccount(TransactionHistory, Transaction, PrintStatement);
      testBankAccount.deposit(50);
      expect(testBankAccount.getBalance()).toBe(50);
    });
  });

  describe("withdrawal", () => {
    it("accepts 40 and decreases balance by 40", () => {
      testBankAccount = new BankAccount(TransactionHistory, Transaction, PrintStatement);
      testBankAccount.deposit(50);
      testBankAccount.withdraw(40);
      expect(testBankAccount.getBalance()).toBe(10);
    });
  });

  describe("printStatement", () => {
    it("calls printStatement function with transaction history as argument", () => {
      //stub the printStatement class & check if the create method was called
    })
  })
});
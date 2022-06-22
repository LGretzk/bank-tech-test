const BankAccount = require('./bankAccount');
const TransactionHistory = require('./transactionHistory');
const PrintStatement = require('./printStatement');

jest.mock('./transactionHistory');
jest.mock('./printStatement');

describe("BankAccount", () => {
  beforeEach(() => {
    mockTransactionHistory = new TransactionHistory();
    mockPrintStatement = new PrintStatement();
    testBankAccount = new BankAccount(mockTransactionHistory, mockPrintStatement);
  });
  
  it("deposit accepts 50 and increases balance by 50", () => {
    mockTransactionHistory.add = jest.fn();
    testBankAccount.deposit(50);

    expect(testBankAccount.getBalance()).toBe(50);
    expect(mockTransactionHistory.add).toHaveBeenCalledTimes(1);
    expect(mockTransactionHistory.add).toHaveBeenCalledWith("credit", 50, 50);
  });


  it("withdrawal accepts 40 and decreases balance by 40", () => {
    mockTransactionHistory.add = jest.fn();
    testBankAccount.deposit(50);
    testBankAccount.withdraw(40);

    expect(testBankAccount.getBalance()).toBe(10);
    expect(mockTransactionHistory.add).toHaveBeenCalledTimes(2);
    expect(mockTransactionHistory.add).toHaveBeenCalledWith("debit", 40, 10);
  });

    it("getPrintStatement calls printStatement.crate function with transaction history as an argument", () => {
      mockPrintStatement.create = jest.fn();
      testBankAccount.getPrintStatement();
      
      expect(mockPrintStatement.create).toHaveBeenCalledTimes(1);
    });
});
const BankAccount = require('./bankAccount');
const TransactionHistory = require('./transactionHistory');
const Transaction = require('./transaction');
const PrintStatement = require('./printStatement');

// jest.mock('./transactionHistory', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       init: jest.fn(() => {}),
//       add: jest.fn(() => {})
//     };
//   });
// });
jest.mock('./transactionHistory');
jest.mock('./transaction');
jest.mock('./printStatement');

describe("BankAccount", () => {
  // beforeEach(() => {
  //   mockTransaction = new Transaction();
  //   mockTransactionHistory = new TransactionHistory();
  //   mockPrintStatement = new PrintStatement();
  //   testBankAccount = new BankAccount(mockTransactionHistory, mockTransaction, mockPrintStatement);
  // })

  xit("initiates an instance of BankAccount", () => {
    testBankAccount = new BankAccount(TransactionHistory, Transaction, PrintStatement);
    expect(testBankAccount).toBeInstanceOf(BankAccount);
  });
  
  it("deposit accepts 50 and increases balance by 50", () => {
    const mockTransaction = new Transaction();
    const mockPrintStatement = new PrintStatement();
    const mockTransactionHistory = new TransactionHistory();
    const testBankAccount = new BankAccount(mockTransactionHistory, mockTransaction, mockPrintStatement);
    mockTransactionHistory.add = jest.fn();
    testBankAccount.deposit(50);

    expect(testBankAccount.getBalance()).toBe(50);
    expect(mockTransactionHistory.add).toHaveBeenCalled();
  });


  it("accepts 40 and decreases balance by 40", () => {
    testBankAccount = new BankAccount(TransactionHistory, Transaction, PrintStatement);
    testBankAccount.deposit(50);
    testBankAccount.withdraw(40);
    expect(testBankAccount.getBalance()).toBe(10);
  });

  describe("printStatement", () => {
    it("calls printStatement function with transaction history as argument", () => {
      //stub the printStatement class & check if the create method was called
    })
  })
});
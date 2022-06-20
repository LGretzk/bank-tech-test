const BankAccount = require('./bankAccount');

describe("BankAccount", () => {
  beforeEach(() => {
    testBankAccount = new BankAccount;
  })

  it("initiates to an instance of BankAccount", () => {
    expect(testBankAccount).toBeInstanceOf(BankAccount);
  });

  it("accepts a deposit of 50 and increases balance by 50", () => {
    testBankAccount.deposit(50);
    expect(testBankAccount.getBalance()).toBe(50);
  });
});
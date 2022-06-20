describe("BankAccount", () => {
  it("initiates to an instance of BankAccount", () => {
    const BankAccount = require('./bankAccount');
    const BankAccountTest = new BankAccount;
    expect(BankAccountTest).toBeInstanceOf(BankAccount);
  });

  it("accepts deposits", () => {
    const BankAccount = require('./bankAccount');
    const BankAccountTest = new BankAccount;
    BankAccountTest.deposit(50);
    expect(BankAccountTest.getBalance()).toBe(50);
  });
});
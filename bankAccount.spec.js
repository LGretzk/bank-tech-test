describe("BankAccount", () => {
  it("initiates to an instance of BankAccount", () => {
    const BankAccount = require('./bankAccount');
    const BankAccountTest = new BankAccount;
    expect(BankAccountTest).toBeInstanceOf(BankAccount);
  });
});
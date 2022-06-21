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

  it("accepts a withdrawal of 40 and decreases balance by 40", () => {
    testBankAccount.deposit(50);
    testBankAccount.withdraw(40);
    expect(testBankAccount.getBalance()).toBe(10);
  });

  it("creates a transaction with type and amount when money is deposited", () => {
    testBankAccount.deposit(50);
    expect(testBankAccount.transaction.type).toBe("deposit");
    expect(testBankAccount.transaction.amount).toBe(50);
  });

  it("creates a transaction with type, amount and balance when money is deposited", () => {
    testBankAccount.deposit(50);
    expect(testBankAccount.transaction.balance).toBe(50);
  });

  it("creates a transaction with type, amount, balance and date when money is deposited", () => {
    testBankAccount.deposit(50);
    let date = new Date().toLocaleDateString("en-GB");

    expect(testBankAccount.transaction.date).toEqual(date);
  });

  it("ceates a transaction with type, amount, balance and date when money is withdrawn", () => {
    testBankAccount.deposit(50);
    testBankAccount.withdraw(40);
    let date = new Date().toLocaleDateString("en-GB");

    expect(testBankAccount.transaction.type).toBe("credit");
    expect(testBankAccount.transaction.amount).toBe(40);
    expect(testBankAccount.transaction.balance).toBe(10);
    expect(testBankAccount.transaction.date).toEqual(date);
  });

  it("saves one transaction in transacton history", () => {
    testBankAccount.deposit(50);
    let date = new Date().toLocaleDateString("en-GB");
    const testHistory = {
      type: "deposit",
      amount: 50,
      date: date,
      balance: 50
    };

    expect(testBankAccount.transactionHistory).toEqual([testHistory]);
  });

  it("saves multiple transactions in transaction history", () => {
    testBankAccount.deposit(50);
    testBankAccount.withdraw(30);
    let date = new Date().toLocaleDateString("en-GB");
    const depositHistory = {
      type: "deposit",
      amount: 50,
      date: date,
      balance: 50
    };
    const withdrawalHistory = {
      type: "credit",
      amount: 30,
      date: date,
      balance: 20
    };

    expect(testBankAccount.transactionHistory).toEqual([depositHistory, withdrawalHistory]);
  });
  
  it("prints a bank statement with one deposit", () => {
    testBankAccount.deposit(50);
    let date = new Date().toLocaleDateString("en-GB");
    const depositHistory = {
      type: "deposit",
      amount: 50,
      date: date,
      balance: 50
    };

    expect(testBankAccount.printStatement()).toEqual(
      `date || credit || debit || balance \n ${date} || 50.00 || || 50.00`)
  });

});
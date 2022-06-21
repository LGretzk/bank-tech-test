const PrintStatement = require("./printStatement");

describe("printStatement", () => {
  beforeEach(() => {
    printStatement = new PrintStatement();
  });

  it("prints a statement with one deposit", () => {
    let date = new Date().toLocaleDateString("en-GB");
    transactionHistory = [{
      type: "credit",
      amount: 50,
      date: date,
      balance: 50
    }];

    expect(printStatement.create(transactionHistory)).toEqual(
      `date || credit || debit || balance \n${date} || 50.00 || || 50.00 \n`
    );
  });

  it("prints a statement with one withdrawal", () => {
    let date = new Date().toLocaleDateString("en-GB");
    transactionHistory = [{
      type: "debit",
      amount: 10,
      date: date,
      balance: -10
    }];

    expect(printStatement.create(transactionHistory)).toEqual(
      `date || credit || debit || balance \n${date} || || 10.00 || -10.00 \n`
    );
  });

  it("prints a statement with multiple transactions", () => {
    let date = new Date().toLocaleDateString("en-GB");
    transactionHistory = [
      {
        type: "credit",
        amount: 1000,
        date: date,
        balance: 1000
      },
      {
        type: "credit",
        amount: 2000,
        date: date,
        balance: 3000
      },
      {
        type: "debit",
        amount: 500,
        date: date,
        balance: 2500
      }
    ];

    expect(printStatement.create(transactionHistory)).toBe(
      `date || credit || debit || balance \n${date} || || 500.00 || 2500.00 \n${date} || 2000.00 || || 3000.00 \n${date} || 1000.00 || || 1000.00 \n`        
    );
  });
});
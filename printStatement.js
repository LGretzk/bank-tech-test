class PrintStatement {
  create(transactionHistory) {
    console.log(`${this.printHeading()}${this.printBody(transactionHistory)}`);
    return `${this.printHeading()}${this.printBody(transactionHistory)}`
  }

  printHeading() {
    return `date || credit || debit || balance \n`;
  }

  printBody(transactionHistory) {
    let transactions = transactionHistory.map(transaction => {
      if (transaction.type === "credit") {
        return `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)} \n`
      }
      return `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)} \n`
    });
    return `${transactions.reverse().join('')}`;
  }
};

module.exports = PrintStatement;
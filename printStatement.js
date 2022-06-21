class PrintStatement {
  create(transactionHistory) {
    return `${this.printHeading()}${this.printBody(transactionHistory)}`
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

  printHeading() {
    return `date || credit || debit || balance \n`;
  }
};

module.exports = PrintStatement;
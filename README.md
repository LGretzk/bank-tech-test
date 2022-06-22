# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Installation
```
$ git clone https://github.com/LGretzk/bank-tech-test.git
$ cd bank-tech-test
$ npm init -y
```

## Running the tests
```
jest
```

## Running the project
```
node
.load bankAccount.js
.load transactionHistory.js
.load printStatement.js

const transactionHistory = new TransactionHistory;
const printStatement = new PrintStatement;
const bank = new BankAccount(transactionHistory, printStatement);

bank.deposit(50);
bank.withdraw(30);
bank.getPrintStatement();

.exit
```

## Example
![screenshot](/repl.png)


## User stories
```
As a user,
so that I can save money,
I would like be able to deposit money onto my bank account.
```
```
As a user,
so that I can spend money,
I would like to be able to witdraw money from my bank account.
```
```
As a user,
so that I know how much money I've got,
I would like to be able to print a bank statement.
```
```
As a user,
so that I can stay on top of my expenses,
I would like my bank statement to include date, amount and balance.
```

## Diagrams

BankAccount <--deposit--> money

BankAccount | deposit(amount)

BankAccount <--withdraw--> money

BankAccount | withdraw(amount)
BankAccount <--print--> statement

BankAccount | printStatement()


BankAccount <--has--> balance
BankAccount <--has--> transaction history

BankAccount | balance
BankAccount | transaction_history

Transaction <--has--> a type (credit/debit)
Transaction <--has--> an amount
Transaction <--has--> a date
Transaction <--has--> a balance

BankAccount | transaction

## Approach

* started with 1 bank class
* split the class into transaction history and print statement
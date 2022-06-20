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

Input:
- deposit 1000 on 10/01/2023
- deposit 2000 on 13/01/2023
- withdrawal 500 on 14/01/2023

Output:
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
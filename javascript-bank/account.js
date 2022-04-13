/* exported Account */
class Account {
  constructor(number, holder) {
    this.number = number;
    this.holder = holder;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0 || typeof amount !== 'number' || !amount || !Number.isInteger(amount)) {
      return false;
    }
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }

  withdraw(amount) {
    if (amount <= 0 || typeof amount !== 'number' || !amount || !Number.isInteger(amount)) {
      return false;
    }
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }

  getBalance() {
    if (!this.transactions.length) {
      return 0;
    }

    /* I spent a lot of time here trying to make everything work with the reduce
    method and the ternary operator but I failed. This is what I was trying:

    return this.transactions.reduce( (previousValue, currentValue) =>
    (previousValue.type === 'deposit'
          ? previousValue.amount
          : previousValue.amount * -1) +
          (currentValue.type === 'deposit'
            ? currentValue.amount
            : currentValue.amount * -1)
            ),0 };
    */

    var deposits = 0;
    var withdrawals = 0;
    this.transactions.forEach(transaction => {
      transaction.type === 'deposit' ? deposits += transaction.amount : withdrawals += transaction.amount;
    });
    return deposits - withdrawals;
  }
}

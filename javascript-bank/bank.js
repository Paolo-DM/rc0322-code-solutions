/* exported Bank */

// Here I will not use ES6 Classes

function Bank() {
  this.accounts = [];
  this.nextAccountNumber = 1;
}

Bank.prototype.openAccount = function (holder, balance) {
  if (!Number.isInteger(balance) || balance <= 0) {
    return null;
  }
  var newAccount = new Account(this.nextAccountNumber, holder);
  newAccount.deposit(balance);
  this.accounts.push(newAccount);
  this.nextAccountNumber++;
  return newAccount.number;
};

Bank.prototype.getAccount = function (number) {
  for (var account of this.accounts) {
    if (account.number === number) {
      return account;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (!this.accounts.length) {
    return 0;
  }
  var totalAssets = 0;
  for (var account of this.accounts) {
    totalAssets += account.getBalance();
  }
  return totalAssets;
};

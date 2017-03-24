var Bank = function(name){
  this.name = name;
  this.accounts = [];
}

Bank.prototype = {
  addAccount: function(account){
    this.accounts.push(account);
  },
  findAccountByName: function(name){
    return this.accounts.find(function(account){ 
      return account.name == name; 
    });
  },
  findLargestAccount: function(){
    var sortedAccounts = this.accounts.sort(function(accountA, accountB){
      // sort the accounts from high > low based on the balance instance variable
      return accountA.balance < accountB.balance;
    });

    return sortedAccounts[0];
  },
  getTotalBalance: function(accountType){
    var filteredAccounts = this.accounts.filter(function(account){
      // The account should be included in the calculation if it matches the given type,
      // or if the given type is undefined. (e.g. all accounts)
      return account.type === accountType || accountType === undefined
    });

    var total = filteredAccounts.reduce(function(accum, account){
      // accum is the accumulator - the running total. The second argument initialises this to 0.
      return accum + account.balance;
    }, 0);

    return total;
  },
  getAverageBalance: function(){
    return this.getTotalBalance() / this.accounts.length;
  }
};

module.exports = Bank
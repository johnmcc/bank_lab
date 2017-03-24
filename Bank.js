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
    var sortedAccounts = this.accounts.sort(function(a, b){
      return a.balance < b.balance;
    });
    return sortedAccounts[0];
  },
  getTotalBalance: function(type){
    return this.accounts.reduce(function(accum, account){
      return accum + account.balance;
    }, 0);
  },
  getAverageBalance: function(){
    return this.getTotalBalance() / this.accounts.length;
  }
};

module.exports = Bank
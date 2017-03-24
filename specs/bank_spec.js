var assert = require("assert"),
  Bank = require("../Bank"),
  Account = require("../Account");

describe("Bank", function(){
  var bank;
  var account1;
  var account2;
  var account3;

  beforeEach(function(){
    bank = new Bank("Bank of Bridgeton");
    account1 = new Account("John", 200, "business");
    account2 = new Account("Alan", 400, "personal");
    account3 = new Account("Steve", 800, "business");
  });

  it('should have a name', function(){
    assert.equal("Bank of Bridgeton", bank.name);
  });

  it('should start with no accounts', function(){
    assert.equal(0, bank.accounts.length);
  });

  it('should be able to add an account', function(){
    bank.addAccount(account1);
    assert.equal(1, bank.accounts.length);
  });

  it('should be able to find an account by name', function(){
    bank.addAccount(account1);
    bank.addAccount(account2);

    assert.equal(account2, bank.findAccountByName("Alan"));
  });

  it('should be able to find the largest account', function(){
    bank.addAccount(account1);
    bank.addAccount(account2);

    assert.equal(account2, bank.findLargestAccount());
  });

  it('should be able to find the total value of all accounts', function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.equal(600, bank.getTotalBalance());
  });

  it('should be able to return the average balance', function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    assert.equal(300, bank.getAverageBalance());
  });

  it('should be able to find the total value for an account type', function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);

    assert.equal(1000, bank.getTotalBalance("business"));
  });

});
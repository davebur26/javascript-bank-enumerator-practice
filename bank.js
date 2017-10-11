var Bank = function() {
  this.accounts = []
}

Bank.prototype = {

  addAccount: function(account) {
    this.accounts.push(account)
  }

}

Bank.prototype.totalValue = function(){
  var total = 0;
  var total = this.accounts.reduce(function(runningTotal, currentAccount) {
    return runningTotal + currentAccount.value
  }, 0);
  return total;
};

Bank.prototype.accountByName = function(name){
  var accountFound;
  this.accounts.forEach(function(account){
    if (account.name === name){
      accountFound = account
    }
  })
  return accountFound

}

Bank.prototype.largestAccount = function(){
  var newArray = this.accounts.sort(function (a,b){
    return b.value - a.value
  })
  return newArray[0]
}

Bank.prototype.averageValue = function(){
  return (this.totalValue()/this.accounts.length)
}

Bank.prototype.businessAccounts = function(){
  return this.accounts.filter(function(account){
    return account.type === "business"
  })
}

module.exports = Bank;

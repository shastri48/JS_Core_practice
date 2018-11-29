function BankAccount(accountNumber, totalBalance) {
var newAccount = Object.create(accountFunction);
newAccount.accountNumber = accountNumber;
newAccount.totalBalance = totalBalance;
return newAccount;
}

var accountFunction = {
  deposit: function(amount){
    this.totalBalance = this.totalBalance + amount;
  },
  withdraw: function(amount){
    this.totalBalance = this.totalBalance - amount;
  },
  getBalance: function(I){
    console.log(this.totalBalance);
  }
}


function CheckingAccount(accountNumber, totalBalance, fee){
  var CheckAccount = new BankAccount(accountNumber, totalBalance);
  CheckAccount.fee = fee;
  Object.setPrototypeOf(CheckAccount, CheckingAccountFunction);
  return CheckAccount;
}
var CheckingAccountFunction = {
  deductFee: function(amount) {
    console.log(this.totalBalance);
  }
}

function SavingAccount(accountNumber, totalBalance, interestRate){
  var saveAccount = new BankAccount(accountNumber, totalBalance);
  saveAccount.interestRate = interestRate;
  Object.setPrototypeOf(saveAccount, saveAccountFunction);
  return saveAccount;
}

var saveAccountFunction = {
  addInterest: function(amount) {
    this.totalBalance = this.totalBalance + amount;
  }
}
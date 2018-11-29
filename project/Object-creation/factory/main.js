function BankAccount(accountNumber, totalBalance) {
  var newAccount = {};
  newAccount.accountNumber = accountNumber;
  newAccount.totalBalance = totalBalance;
  newAccount.deposit = function(amount){
    newAccount.totalBalance = totalBalance + amount;
  }
  // newAccount.withDraw
  return newAccount;
}

function CheckingAccount(accountNumber, totalBalance, fee){
  var checkAccount = new BankAccount(accountNumber, totalBalance);
  checkAccount.fee = fee;
  checkAccount.deductFee = function (amount){
    checkAccount.totalBalance = totalBalance + amount;
  }
  return checkAccount;  
}

function savingAccount(accountNumber, totalBalance, interestRate){
  var saveAccount = new BankAccount(accountNumber, totalBalance);
  saveAccount.interestRate = interestRate;
  checkAccount.addInterest = function (amount) {
    saveAccount.totalBalance = totalBalance + amount;
  }
}
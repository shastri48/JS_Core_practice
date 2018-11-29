class BankAccount {
  constructor(accountNumber, totalBalance){
    this.accountNumber = accountNumber;
    this.totalBalance = totalBalance;

  }
  deposit(amout){
    this.totalBalance = this.totalBalance + amout;
    return this.totalBalance;
  }
  withdraw(amout){
    this.totalBalance = this.totalBalance - amout;
    return this.totalBalance;
  }
}


class CheckingAccount extends BankAccount {
  constructor(accountNumber, totalBalance, fee){
    super(accountNumber, totalBalance);
    this.fee = fee;
  }
  deductFee(){
    this.totalBalance = this.totalBalance - fee;
  }
}


class SavingAccount {
  constructor(accountNumber, totalBalance, interestRate){
    super(accountNumber, totalBalance);
    this.rate = interestRate;
  }
  addInterest() {
    this.totalBalance = this.totalBalance + this.rate;
  }
}
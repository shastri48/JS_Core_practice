const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;
i=0;

// Write a program to calculate the total price of your phone purchase.
// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.

//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.



for(amount;amount<=bank_balance;amount+=PHONE_PRICE){
  console.log("will purchase " + i + " Phones and total price is " + amount);
  i++;
  // amount = amount + PHONE_PRICE;
  if(amount<SPENDING_THRESHOLD){
    amount = amount + ACCESORY_PRICE;
  }
 }

//Finally, check the amount against your bank account balance to see if you can afford it or not.

// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.


//  function calculateTax(tax){
//   return  tax * TAX_RATE;
//  }

// amount = amount + calculateTax(amount);

//  calculateTax(amount);
// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.


//  function formatAmount(total){
//   console.log("Your total payable amount is = $ " + total.toFixed(2));
//  }
//  formatAmount();
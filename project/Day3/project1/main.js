// coding style
// Convert the following code in the required code style structure.

function pow(x, n) {
  let result = 1; 
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", ''); 
var n = prompt("n?", '');
if (n <= 0) {
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
  alert( pow(x,n) );
}





// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
function tellFortune(child, p_name, location, job) {
  console.log(`you will be a ${job} in ${location}, and married to ${p_name} with ${child} kids`);
}



// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Add an additional argument to the function that takes the conversion rate of human to dog years.
function calculateDogAge(puppyage){
  var dogyear = puppyage * 7;
  console.log(`Your doggie is ${dogyear} years old in dog years!`)
}



// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Accept floating point values for amount per day, and round the result to a round number.
function calculateSupply(age, amount){
  var consumed = amount * 365 * age;

}



// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function celsiusToFahrenheit(celsius){
  fahreheit = (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahreheit){
  celsius = (fahreheit - 32) * 5/9;
}


//1. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
// Will the function work differently if else is removed?

// it will always return true;

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
// Is there any difference in the behavior of these two variants?
// no it will work in same manner as it worked above






// 2. The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||
function checkAge(age) {
 c =  (age > 18 ? true:false);
}



// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
// In this task the function should support only natural values of n: integers up from 1.
var sum = 1;
var num1 = prompt("Enter a number");
var num2 = prompt("Enter the power");
var pow = (x, n) => {
  if(x>1){
    for( var i = 0; i < n; i++){
      sum = sum * x;
      }  
    return alert(`pow(${x}, ${n}) = ${sum}`);

  } else {
    alert("Enter a positive integer");
    return 0;
  }  
}



// Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
var string = prompt("Enter the string");
var array = string.split("");
count = 0;
for(i = 0; i < array.length; i++){
  if(array[i]=="a"||array[i]== "e" || array[i] == "i" || array[i] == "o" || array[i] == "u" || array[i] == "A" || array[i] == "E" || array[i] == "I" || array[i] == "O" || array[i] == "U"){
  count++;
}
}

// Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”
var string = prompt("Enter the string");
var array = string.split("");
var ispal = 1;
function palindromecheck(array){
  for(i = 0; i < array.length; i++){
    if(!(array[i] == array[array.length - (i+1)])) {
      ispal = 0;
    }
  }
  if(ispal)
  return(`pallindrome`);
  else
  return(`not pallindrome`);
}
palindromecheck(array);



// Counts the number of individual words in a string. For added complexity read these strings in from a text file and generate a summary.
var string = prompt("Enter the string");
var array = string.split(" ");
// count = 1;
// function wordcount(array){
//   for(i = 0; i <array.length; i++){
//     if(array[i] == " "){count++}
//   }
// }
// wordcount(array);
console.log(array.length);

// Show the following output using one loop.
    // 1, 2, 3, 4, 5
    // 6, 7, 8, 9, 10
for(i = 1; i<=10; i+=5){
  console.log(`${i},${i+1},${i+2},${i+3},${i+4}`);
}

// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
var num1 = prompt("Enter a number");
var num2 = Number(num1);
sum = 0;
var choice = prompt("Enter you choice. 1. sum 2. product");
if(choice == "1"){
  for(var i = 1; i <= num2; i++){
    sum = sum + i;
  }
}else if(choice == "2"){
  sum = 1;
  for(var i = 1; i <= num2; i++){
    sum = sum * i;
}
}
console.log(`result is ${sum}`);

// Write a function that returns the largest element in a list.


// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
var num1 = prompt("Enter a number");
var num2 = Number(num1);
var sum = 0;
for(var i = 1; i <= num2; i++){
  sum = sum + i;
}
console.log(`sum value = ${sum}`);

// Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
var num1 = prompt("enter a number");
var num2 = Number(num1);
sum = 0;
for( var i = 1; i <= num2; i++){
  if(i%5 == 0 || i%7 == 0){
    sum = sum + i;
  }
}
console.log(`sum value = ${sum}`);


// Write a program that takes a number under (25) and prints the multiplication table for the number.
var num1 = prompt("enter a number");
var num2 = Number(num1);
if(num2 < 25){
  for(i = 1; i <= 10; i++){
    console.log(num2 * i);
  }
}

// Sharing settings

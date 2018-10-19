// Arrays to work on
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];


// Use the above two arrays and practice array methods


// Find largest number in numbers
var big = numbers[0];
for(i = 0; i < numbers.length; i++) {
  if(numbers[i+1] > big){
    big = numbers[i+1];
  } 
}
console.log(big); 
// Find longest string in strings
var long = 0;
var number = 0;
for(i = 0; i < strings.length; i++){
  if(long < strings[i].length){
    long = strings[i].length;
    number = strings[i];
  }
}
console.log(long);
console.log(number)

// Find all the even numbers
num1 = numbers.filter(v => v % 2 == 0);


// Find all the odd numbers
num1 = numbers.filter(v => v % 2 != 0)


// Find all the words that contain 'is' use string method 'contains'
num1 = strings.filter(va => va.includes("is"));



// Find all the words that contain 'is' use string method 'indexOf'
num1 = strings.filter(v => v.indexOf("is") != -1);

// Check if all the numbers in numbers array are divisible by three use array method (every)
var array = numbers.every(num => num % 3 == 0);



//  Sort Array from smallest to largest
var array = numbers.sort((a, b) => a - b);

// Remove the last word in strings


// Add a new word in the array
strings.push("hello")


// Remove the first word in the array
strings.shift()


// Place a new word at the start of the array use (upshift)
strings.unshift("this")



// Make a subset of numbers array [18,9,7,11]
// array = numbers.substring(3, 4)



// Make a subset of strings array ['a','collection']


// Replace 12 & 18 with 1221 and 1881
// for(i = 0; i < numbers.length; i++){
//   if(numbers[i] == 12){
//     numbers[i] = 1221;
//   }
// }





// Replace words with string in strings array



// Customers Array
var customers = [
    { firstname : 'Joe', lastname : 'Blogs'},
    { firstname : 'John', lastname : 'Smith'},
    { firstname : 'Dave', lastname : 'Jones'},
    { firstname : 'Jack', lastname : 'White'}
];

// Find all customers whose firstname starts with 'J'
var firstname = customers.map(v => v.firstname)
firstname.filter(v => v.charAt(0) == "J");

// Create new array with firstname and lastname
var firstname = customers.map(v => `${v.firstname} ${v.lastname}`)


// Sort the array created above alphabetically
firstname = firstname.sort();

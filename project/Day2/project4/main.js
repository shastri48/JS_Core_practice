// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”


// var password = prompt("enter password");
// var conf_password = prompt("confirm password");
// if(password==conf_password){
//   alert("Password Validated");
// } else{
//   alert("Password do not match");
// }


// Find the output of the following
// Logical AND operation
// true  && true;
// true  && false;
// false && true;
// false && false;

// Logical OR operation
// true  || true;
// true  || false;
// false || true;
// false || false;

// "foo" && "bar";
// "bar" && "foo";
// "foo" && "";
// ""    && "foo";

// "foo" || "bar";
// "bar" || "foo";
// "foo" || "";
// ""    || "foo";


// console.log(true && true);

// console.log(true && false);

// console.log(false && true);

// console.log(false && false);



// Output of this alert( alert(1) || 2 || alert(3) );

// alert(alert(1) || 2 || alert(3));



// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.
// var num1 = prompt("enter first number");
// var num2 = prompt("enter second number");
// function calculation(a, b){
//   var sum = a+b;
//   console.log("sum = "+ sum);
//   console.log("sub = ", (a - b));
//   console.log("mul = " + a * b);
//   console.log("div = " + a / b);
// }
// calculation(num1, num2);


// function calculate()


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// var sum = 0;
// for(i = 0; i < 1000; i++){
//   if(i%3==0 || i%5==0){
//     sum = sum + i;
//   }
// }
// console.log(sum);




// Function to display a number if user enters negative number

// var num1 = prompt("Enter number here");
// function display(a){
//   if(a<0){
//     console.log(a);
//   }
// }
// display(num1);


// Funnction to check whether an integer entered by the user is odd or even

// var num1 = prompt("Enter number here");
// function check(a){
//   if(a%2==0){
//     console.log("given number is even")
//   } else{
//     console.log("given number is odd");
//   }
// }
// check(num1);



// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12







// Funnction to Check Whether a Character is Vowel or Consonant
// var char = prompt("Entere a character");
// function check(char){
//   if(char=="a"||char=="A"||char=="e"||char=="E"||char=="i"||char=="I"||char=="o"||char=="O"||char=="u"||char=="U"){
//     console.log("entered character is vowel");
//   }else{
//     console.log("entered character is consonant");
//   }
// }
// check(char);






// var big = num1;
// function largest(a, b, c){
//   big = a;
//   if(a<b){
//     big = b;
//   }
//   if(big<c){
//       big = c;
//   }
// }



// var a = 6;
// function score(a){
//   var a = 3;
//   console.log(a);
// }




// Funnction to generate Multiplication Table of a given number (use alert for number input)
// var num1 = Number(prompt("Enter number"));
// function table(a){
//   for(var i = 1; i<=10; i++){
//     console.log(a * i);
//   }
// }
// table(num1);




// var num1 = Number(prompt("Enter number"));
// sum = 0;
// function factorial(a){
//   for(var i = 1; i <= a; i++){
//     sum = sum + i;
//   }
// }
// factorial(num1);
// console.log(sum);



// Output: var x = 10 + "1"; console.log(x); typeof x;
// var x = 10 + "1";
// console.log(x);
// typeof(x);


// console.log(225/6);



// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
// var x = 1;
// var y = 2;
// var sum = y;
// do{
//   var temp = y;
//   y = x + y;
//   x = temp; 
//   if(y%2==0){
//     sum = sum + y;
//   }
// }while(y<4000000);





// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30


// var marks = Number(prompt("Enter number"));
// if(marks>90){
//   console.log("AA")
// }else if(marks<=90 && marks>80){
//   console.log("AB");
// }else if(marks<=80 && marks>70){
//   console.log("BB");
// }else if(marks<=70 && marks>60){
//   console.log("BC");
// }else if(marks<=60 && marks>50){
//   console.log("CC");
// }else if(marks<=50 && marks>40){
//   console.log("CD");
// }else if(marks<=40 && marks>30){
//   console.log("DD");
// }else if(marks<=30){
//   console.log("FF");
// }







//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to .
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.

// switch( prompt("enter a number") ){
//   case "1":
//     console.log("ONE");
//     break;
//   case "2":
//     console.log("TWO");
//     break;
//   case "3":
//     console.log("THREE");
//     break;
//   case "4":
//     console.log("FOUR");
//     break;
//   case "5":
//     console.log("FIVE");
//     break;
//   case "6":
//     console.log("SIX");
//     break;
//   case "7":
//     console.log("SEVEN");
//     break;
//   case "8": 
//     console.log("EIGHT");
//     break;
//   case "9":
//     console.log("NINE");
//     break;
//   default:
//     console.log("PLEASE TRY AGAIN");
// }
////print 1 to 0 number using recursion
var a = 0;
function oneToTen() {
  a++;
  if (a > 10) return;
  console.log(a);
  oneToTen();
}


// Write a JavaScript program to calculate the factorial of a number. Go to the editor
var sum = 1;
function print(n) {
  if(n < 1) return;
  sum = sum * n;
  // console.log(sum);
  print(--n);
  return sum;
}


//Write a JavaScript program to get the integers in range (x, y)

function printRange(x, y){
    if (x >= y){
    //   console.log(x);
    //   x++;
    //   return printRange(x, y);
//  } else {
    console.log(y);
    y++;
    return printRange(x, y);
  } 
}


// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

  function findGCD(num1, num2){
    let i = num1;
    if(num1 % i == 0 && num2 % i == 0){
      return i;
    }
    --i;
   return findGCD(num1, num2);
  }


  function findGCD(num1, num2) {
    if (num1 > num2){
      var big = num1;
      var small = num2;
    }  
   else {
     big = num2;
     small = num1;
   }
   function findGCD1(big, small){
    var remainder = big % small;
    if (remainder == 0) return small;
    findGCD(small, remainder);
   }
   return findGCD1();
  }




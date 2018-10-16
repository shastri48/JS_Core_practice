/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numtostr(number) {
  number = String(number);
  return number;
}


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function add(n) {
  n = n + 1;
  console.log(n);
}


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function sub(n) {
  n = n - 1;
  console.log(n);
}


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function add(x, y) {
  var sum = x + y;
  return sum;
}



/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subs(x, y) {
  var difference = x - y;
  return difference;
}



/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function mul(x, y) {
  var product = x * y;
  return product;
}



/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x, y) {
  var divide = x / y;
  return divide;
}


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x) {
  var squared = x * x;
  return squared;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculation(operation, x, y) {
  if (operation == "add") {
    return `${x} + ${y} = ${x + y}`;
  } else if (operation == "subtract") {
    return `${x} - ${y} = ${x - y}`;
  } else if (operation == "multiply") {
    return `${x} * ${y} = ${x * y}`;
  } else if (operation == "divide") {
    return `${x} / ${y} = ${x / y}`;
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function greater(a, b) {
  if (a > b) {
    return true;
  }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function smaller(a, b) {
  if (a < b) {
    return true;
  }
}


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function equal(a, b) {
  if (a == b) {
    return true;
  }
}


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function smallest(x, y) {
  if (x > y){
    return y;
  } else {
    return x;
  }
}


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function largest(x, y) {
  if (x > y) {
    return x;
  } else return y;
}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function oddEven(n) {
  if (n % 2 == 0) {
    return true;
  } else return false;
}


/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function oddEven(n) {
  if (n % 2 != 0) return true;
  else return false;
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function grade(score, total) {
  var percent = (score / total) * 100;
  if (percent >= 90 && percent <=100) {
    return `A`;
  } else if (percent >= 80 && percent <= 89) {
    return `B`;
  } else if (percent >= 70 && percent <= 79) {
    return `C`;
  } else if (percent >= 60 && percent <= 69) {
    return `D`;
  } else if(percent <= 59) {
    return `F`;
  }
}


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
var restaurant = {};
function reviewCheck(obj) {
  if(obj.reviews) {
    ++obj.reviews;
    return obj;
  } else {
    obj.reviews = 1;
    return obj;
  }
}



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function addWord(word1, word2) {
  var newString = word1.concat(` ${word2}`);
  return newString;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
var circle = {};
function calculation(radius) {
   circle.area = 3.14 * r * r;
   circle.circumference = 2 * 3.14 * r; 
}
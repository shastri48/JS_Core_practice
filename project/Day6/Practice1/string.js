
// Write a JavaScript function to check whether an `input` is a string or not.
  var sentance = prompt("Enter something");
  function stringCheck(sentance) {
    if ( typeof(sentance) == "string" ){
      return true;
    } else return false;
  }
// Write a JavaScript function to check whether a string is blank or not.
  var str = prompt("enter something");
  function blackCheck() {
    if (str.charAt(0) == "") return `not a string`; 
  }





// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']
var sentance = prompt("Enter something");
function splitString() {
  sentance = sentance.split(" ");
  return sentance;
}



// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"
function stringExtract(str) {
  var value = str.slice(0, 4);
  return value;
}



// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)
function nameString() {
  str = str.split(" ");
  for(i = 1; i < str.length; i++){
    str[i] = str[i].charAt(0).concat(".");
  }
  str = str.join(" ");
}


// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"
function emailReplace() {
  var dot = "."
  var position = str.indexOf("@");
  newstr = str.substr(0, 3).concat(dot.repeat(position - 3), str.substring(position));
  return newstr;
}


// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower
string = "hello man how are o";
function sentanceAppend() {
  string = string.replace(/ /, "-");
  string = string.toLowerCase();
  return string;
}




// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'
function capitalize() {
  array = str.split(" ");
  for(var i = 0; i< array.length; i++){
    array[i] = array[i].charAt(0).toUpperCase().concat(array[i].substring(1));
  }
  str = array.join(" ");
  return str;
}



// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'
function caseChange() {
  array = str.split(""); 
  for(var i = 0; i < array.length; i++) {
    if (array[i] == array[i].toLowerCase()) {
      array[i] = array[i].toUpperCase();
    } else {
      array[i] = array[i].toLowerCase();
    }
  }
  str = array.join("");
}


// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'
function capitalize() {
  array = str.split(" ");
  for(var i = 0; i< array.length; i++){
    array[i] = array[i].charAt(0).toUpperCase().concat(array[i].substring(1));
  }
  str = array.join("");
  return str;
}



// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'
// var newstr =[];
function caseChange() {
  array = str.split(""); 
  newstr = [array[0]];
  for(var i = 1; i < array.length; i++) {
    if (array[i] == array[i].toUpperCase()) {
    newstr.push(" ");
    } 
    newstr.push(array[i]);
  }
  newstr = newstr.join("");
}




// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'
function repeatMsg(str, number) {
  str = str.repeat(number);
  return str;
}


// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd
function humanizedNum(number) {
  number = String(number);
  number = number.split("");
  if (number[number.length - 1] == "1"){
    number = number.join("");
    number = Number(number);
    return `${number}st`;
  } else if (number[number.length - 1] == "2"){
    number = number.join("");
    number = Number(number);
    return `${number}nd`;
  } else if (number[number.length - 1] == "3"){
    number = number.join("");
    number = Number(number);
    return `${number}rd`;
  } else {
    number = number.join("");
    number = Number(number);
    return `${number}th`;
  } 
}






// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']
  var newStr = [];
  var newStr2 = [];
  function chopString(n) {
    array = str.split("");
    for(var i = 0; i < array.length; i+=n) {
      for(var k = i; k < i+n; k++){
      newStr.push(array[k]);
      }
    newStr2.push(newStr.join(""));
    newStr = [];
    }
  }


//Write a JavaScript function to count the occurrence of a substring in a string.
// Input (String, String) -> ('The world of the dogs', 'the')
// Output (Number) -> 2
var newStr = [];
function countRepeat(str1, str2) {
  str1 = str1.toLowerCase();
  str1 = str1.split(" ");
  newStr = str1.filter(word => word == str2.toLowerCase());
  return newStr.length;
}



//  Write a JavaScript function to strip leading and trailing spaces from a string.
// Input (String) -> ('Hello World   ')
// Output String -> "Hello World"
function trimString(string) {
  newString = string.trim;
}


// Write a JavaScript function to truncate a string to a certain number of words.
// Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
// Output ( String ) -> "The quick brown fox"
var newArray = [];
function truncateString(string, num) {
  var array = string.split(" ");
  for(i = 0; i < num; i++)
  newArray.push(array[i]);
}



// Write a JavaScript function to alphabetize a given string.(A -z)
// Input (String) -> 'United States'
// Output 'SUadeeinsttt'
function alphabetize() {
  string = string.split(" ");
  string = string.join("");
  array = string.split("");
  var sorted = array.sort();
  return sorted.join("");
}



// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// Input ( String String) -> ('abcd', 'AbcD')
// Output Boolean -> true
// ('ABCD', 'Abce') -> false

function insensitive() {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  if(str1 == str2) return true;
  else return false;
}
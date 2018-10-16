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
    if (array[i].toUpperCase()) {
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



// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'



// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'


// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd


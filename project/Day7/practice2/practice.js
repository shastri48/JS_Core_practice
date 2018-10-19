var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
var long = 0;
var number = 0;
for(i = 0; i < words.length; i++){
  if(long < words[i].length){
    long = words[i].length;
    number = words[i];
  }
}
console.log(long);
console.log(number);



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
var sum = 0;
function sumArray(numbers1){
  sum = numbers1.reduce((a, b) => a + b);
  average = sum/numbers1.length;
  return `sum = ${sum} and average = ${average}`;
}




var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
var sum = 0;
function sumArray(numbers2){
  sum = numbers2.reduce((a, b) => a + b);
  average = sum/numbers2.length;
  return `average = ${average}`;
}




var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
count = 0;
function averageWordLength(words2){
  for(var i = 0; i<words2.length; i++){
    count = count + words2[i].length
  }
}


// Name: replace
// work: Returns the modified string.
// arguments: String , pattern , replacement

export default function replace(str, pattern, value){
  var newStr = str.split("");
  newStr.splice(str.indexOf(pattern), pattern.length, value);
  return newStr.join("");
}


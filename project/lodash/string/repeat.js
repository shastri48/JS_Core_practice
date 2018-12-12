// Name: repeat
// work: Returns the repeated string.
// arguments: String and number of times to repeat array

export default function repeat(str, times) {
  newStr = "";
  if(times == 0) return "";
  for(i = 0; i < times; i++){
    newStr += str;
  }
  return newStr;
}

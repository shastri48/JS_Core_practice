// Name: trim
// work: Returns the trimmed string.
// arguments: String and character/white space to trim

export default function trim(str, char){
    var newStr = str.split("");
    if(char.includes(newStr[0]) || char.includes(newStr[newStr.length - 1])){
     (char.includes(newStr[0]) ) ? newStr.splice(0,1) :null ;
    (char.includes(newStr[newStr.length - 1]) ) ? newStr.splice(-1, 1) :null ;
      return trim(newStr.join(""), char);
    }
    return newStr.join(""); 
  }

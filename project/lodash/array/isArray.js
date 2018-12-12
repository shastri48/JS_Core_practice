// Name: isArray
// work: Returns true if value is an array, else false.
// arguments: value 

export default function isArray(value){
  if(Array.isArray(value)) return true;
  else return false;
}
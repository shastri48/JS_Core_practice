// 9. Name: fill
// work: Returns an array after replacing with given value
// arguments: Array and value to replace and starting point and ending point

export default function fill(arr, value, start = 0, end = arr.length){
  return arr.map((v, i)=> {
     if(i >= start && i < end){
       v = value;
     }
     return v;
   })
 }
 
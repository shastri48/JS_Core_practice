// Name: flatten
// work: Returns an array after removing 1 level deep array
// arguments: Array

export default function flatten(arr){
  return arr.reduce((acc, v) =>{
    if(Array.isArray(v)){
      v.forEach(val=> acc.push(val));
    } else acc.push(v);
    return acc;
  }, [])
}
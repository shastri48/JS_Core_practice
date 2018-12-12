// Name: flattenDeep
// work: Recursively flattens array.
// arguments: Array 

export default function flattenDeep(arr){
  if(!arr.some(v=> Array.isArray(v))) {return arr};
  var newArr = arr.reduce((acc, v) => {
    if(Array.isArray(v)){
      v.forEach(e => acc.push(e))
    } else acc.push(v);
    return acc;
  }, [])
  return flattenDeep(newArr);
}
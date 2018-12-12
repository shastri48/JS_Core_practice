// Name: flattenDepth
// work: Recursively flatten array up to depth times.
// arguments: Array and depth in number

export default function flattenDepth(arr , depth){
  if(depth == 0) return arr;
  var newArr = arr.reduce((acc, v) => {
    if(Array.isArray(v)){
      v.forEach(e => acc.push(e))
    } else acc.push(v);
    return acc;
  }, [])
  depth--;
  return flattenDepth(newArr, depth);
}
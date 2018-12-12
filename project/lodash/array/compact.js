// 2. Name: compact
// work: Returns an array after filtering all falsy value
// arguments: Array
export default function compact(arr) {
  var newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

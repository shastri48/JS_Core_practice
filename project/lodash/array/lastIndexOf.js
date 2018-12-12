// Name: lastIndexOf
// work: This method is like _.indexOf except that it iterates over elements of array from right to left.
// arguments: array , value, index to search from

export default function lastIndexOf(arr, value, index){
  var newArr = arr.slice(index);
  var matchValue = newArr.reduce((acc, val, index) => {
    if(val == value) acc.push(index);
    return acc;
  },[]);
  return matchValue[matchValue.length - 1];
}
// Name: sortedIndex
// work: Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.
// arguments: Array and value

export default function sortedIndex(arr, value) {
  var current =  arr.reduce((acc, val, index) => {
    if(index == arr.length -1) acc.push(val);
    if(value >= arr[index] && value <= arr[index + 1]) acc.push(val);
    return acc;
  },[]);
  return arr.indexOf(current[0]) + 1;
}
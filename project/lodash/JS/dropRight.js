// 8. Name: dropRight
// work: Returns an array after removing n number of elements from an array from last
// arguments: Array and number of elements to be deleted from last

export default function dropRight(arr, n = 1){
  return arr.slice(0, arr.length-n);
}

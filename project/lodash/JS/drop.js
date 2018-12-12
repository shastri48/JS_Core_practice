// 7. Name: drop
// work: Returns an array after removing n number of elements from an array
// arguments: Array and number of elements to be deleted

export default function drop(arr, n = 1){
  return arr.slice(n, arr.length);
}

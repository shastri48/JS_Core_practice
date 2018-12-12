// Name: nth
// work: Gets the element at index n of array. If n is negative, the nth element from the end is returned.
// arguments: Array and index

export default function nth(arr, index){
  if(index < 0){
    return arr[arr.length-(-index)]
  } else { return arr[index]}
}
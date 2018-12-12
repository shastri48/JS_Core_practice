// Name: slice
// work: Creates a slice of array from start up to, but not including, end.
// arguments: array , startindex and endindex

export default function slice( arr, start = 0, end = arr.length){
  return arr.slice(start, end + 1);
}


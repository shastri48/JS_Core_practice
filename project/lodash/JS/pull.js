// Name: pull
// work: Removes all given values from array using SameValueZero for equality comparisons.
// arguments: Array and values [...value]

export default function pull(arr, ...value){
  return arr.reduce((acc, v) => {
    if(!(value.includes(v))) acc.push(v);
    return acc;
  }, [])
}
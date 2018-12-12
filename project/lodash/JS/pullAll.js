// Name: pullAll
// work: Gets all the elements after removing all elements present in value array
// arguments: Array and array

export default function pullAll(arr, value){
  return arr.reduce((acc, v) => {
    if(!(value.includes(v))) acc.push(v);
    return acc;
  }, [])
}
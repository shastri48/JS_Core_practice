// Name: without
// work: Returns the new array of filtered values.
// arguments: Array and values

export default function without(arr, ...value){
  return arr.reduce((acc, val)=>{
    if(!(value.includes(val))) acc.push(val);
    return acc;
  }, [])
}
// Name: intersection
// work: finds common element from all array
// arguments: Array and arrays

 export default function intersection(arr, ...other){
  return arr.reduce((acc,v) =>{
    other.reduce((acc2, val) =>{
        if(val.includes(v)) acc.push(v);
    }, 0)
    return acc;
  },[])
 }

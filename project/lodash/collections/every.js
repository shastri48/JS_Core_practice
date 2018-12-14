// Name: every
// work: return collections
// arguments: Array/object and function
export default function every(collect, fn) {
  if(Array.isArray(collect)){
    var newCollect = collect.map(v => {
      return fn(v);
    })
    if(newCollect.includes(false)) return false;
    else return true;
  } else {
    var keys = Object.keys(collect);  
  }
}

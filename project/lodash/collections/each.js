// 1. Name: each.js
// work: return collections
// arguments: Array/object and function

export default function each(collect, fn) {
  if(Array.isArray(collect)){
    collect.map(v => {
      fn(v);
    });
  } else {
    var keys = Object.keys(collect);
    keys.forEach((v) => {
      fn(v, collect[v]);
    });
  }
}

// 7. Name: pickBy
// work: returns a filtered object
// arguments: object and checking function
export default function pickBy(obj, check){
  var newObj = Object.assign({}, obj);
  var keys = Object.keys(obj);
  keys.forEach(v => {
    if(!check(newObj[v])){
      delete newObj[v];
    }
  })
  return newObj;
}

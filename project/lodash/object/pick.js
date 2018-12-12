// 7. Name: pick
// work: Returns the new object.
// arguments: object and path

export default function pick(obj, path) {
  var newObj = Object.assign({}, obj);
  var keys = Object.keys(newObj);
  keys.forEach(v => {
    if(!path.includes(v)){
      delete newObj[v];
    }
  })
  return newObj;
}
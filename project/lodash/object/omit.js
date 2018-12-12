// 7. Name: omit
// work: Returns the new object.
// arguments: object and path in string to remove

export default function omit(obj, path){
  var newObj = Object.assign({}, obj);
  path.forEach(v => {
    delete newObj[v];
  })
  return newObj;
}
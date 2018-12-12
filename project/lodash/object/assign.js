// 7. Name: assign
// work: Returns object.
// arguments: number and function

export default function assign(obj, ...objNew){
  objNew.forEach(v=>{
    Object.assign(obj, v);
  })
  return obj;
}
// 3. Name: concat
// work: Returns an array after adding all values to the first one
// arguments: Array and all other to concat

export default function concat(arr, ...rest){
  var newArr = arr.slice();
  for(var i = 0; i < rest.length; i++){
    if(Array.isArray(rest[i])){
      for(j = 0; j < rest[i].length; j++){
        newArr.push(rest[i][j])
      }
    } else newArr.push(rest[i]);
  }
  return newArr;
}

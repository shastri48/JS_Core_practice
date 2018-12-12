// 4. Name: difference
// work: Returns an array after removing all elements present in 2nd argument
// arguments: Array and difference array

export default function difference(arr, value){
  var newArr = arr.slice();
  for(i = 0; i < newArr.length; i++){
    for(j = 0; j < value.length; j++){
      if(newArr[i] == value[j]){
        newArr.splice(i, 1);
        i = -1;
      }
    }
  }
  return newArr;
}

// alternate method

// function difference2(arr, value){
//   return arr.filter((v)=> !value.includes(v))
// }

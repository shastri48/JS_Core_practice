// 1. Name: chunk
// work: Breaks an array into chunks
// arguments: Array and size of each chunk

export default function chunk(arr, size) {
  var newArr = [];
  var end = size;
    for(let start = 0; start < arr.length; start+=size){
      newArr.push(arr.slice(start, end));
      end += size;
    }
    return newArr;
  }
  
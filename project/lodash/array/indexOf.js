// Name: indexOf
// work:  Returns the index of the matched value, else -1.
// arguments: Array and value

export default function indexOf(arr, value, fromIndex = 0){
 for(i = 0; i < arr.length; i++){
   if(arr[i] == value && i >= fromIndex){ return i;}
 } 
}
function increment(num){
	return num + 1;
}
function decrement(num) {
  return num - 1;
}
function double(num){
	return num * 2;
}
function half(num){
	return num / 2;
}
function square(num){
	return num * num;
}
var calcArr = [increment, decrement, increment, increment, square, half, double, square];
function returnValue(value){
  return calcArr.reduce((acc, val)=>{
    return acc = val(acc);
  }, value)
}
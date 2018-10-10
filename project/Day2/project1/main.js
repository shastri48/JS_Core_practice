// function greeting(time) {
//   if(time<11){ 
//     console.log("good morning");
//   } else if(time<17){
//     console.log("good afternoon");
//   } else if(time<22){
//     console.log("good evening");
//   } else {
//     console.log("good night");
//   }
// }
// greeting(12);



var price;
function cost(price){
  if(price<100){
    console.log("it does not cost much");
  } else if(price>100 && price<500){
    console.log("its a bit costly");
  }
  else{
    console.log(" price is too high");
  }
}
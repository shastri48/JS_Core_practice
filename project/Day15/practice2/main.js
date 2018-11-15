// var student = {
//   marks: function createObject(p,c,m) {
//     this.marks = {
//     physics: p,
//     chemistry: c,
//     maths: m,
//   }},
//   total: function total() {
//     var sum = 0;
//     for(value of Object.values(this.marks)){
//       sum = sum + value;
//     }
//     return sum;
//     },
//   percentage: function percentage(){
//     return (this.total()/Object.values(this.marks).length);
//     },
//   passorfail: function passorfail() {
//     if(this.percentage() >= 40){
//       return "pass";
//     } else return "fail";
//   }
// }

// var newObj = Object.create(student);
 







// let createObject = {
//   data: 20,
//   total: function total() {
//     var sum = 0;
//     for(value of Object.values(this.marks)){
//       sum = sum + value;
//     }
//     return sum;
//     }, 
//   percentage: function () {
//     return (this.total()/ Object.values(this.marks).length);
//     },
//   passfail: function () {
//     if(this.percentage() >= 40){
//       return "pass";
//     } else return "fail";
//   }
//   }

// function createUser(p,c,m){
//   var newUser = Object.create(createObject);
//   newUser.marks = {};
//   newUser.marks.physics = p;
//   newUser.marks.chemistry = c;
//   newUser.marks.maths = m;
//   return newUser;
// }
// var addNew = createUser(23,45,76);





function createUser(p,c,m){
  // var newUser = {};
  // newUser.data= 20;
  this.marks = {};
  this.marks.physics = p;
  this.marks.chemistry = c;
  this.marks.maths = m;
  // return newUser;
}
createUser.prototype.total = function (){
  var sum = 0;
  for(value of Object.values(this.marks)){
    sum = sum + value;
  }
  return sum;
  } 
var addNew = new createUser(23,45,76);




// function createUser(p,c,m){
//   this.physics = p;
//   this.chemistry = c;
//   this.maths = m;
// }

// createUser.prototype.total = function () {
//   return this.physics+this.chemistry+this.maths;
// }
// var addNew = new createUser(23,45,75);
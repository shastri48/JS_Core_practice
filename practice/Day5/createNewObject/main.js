var student = {
  marks: {
    maths: 34,
    science: 46,
    social : 75
  },
  total: function totalCalc() {
    return student.marks.maths + student.marks.science + student.marks.social;
  },
  percentage : function percentCalc() {
    return student.total()/300*100;
  }
}


// var student = {
//   function1: function on(){
//     console.log("hello")
//   }
// }
// console.log(dir(Object.create(student)))
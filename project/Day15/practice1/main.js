var student = {};
function createObject(p,c,m) {
  var marks = {
    physics: p,
    chemistry: c,
    maths: m,
  };
  // var student = {};
  var sum = 0;
  
  student.total = (function total() {
    for(value of Object.values(marks)){
    sum = sum + value;
    }
    return sum;
  })();

 student.percentile = student.total/Object.values(marks).length;

  student.passOrFail = (function passOrFail() {
    if(student.percentile >= 40){
      return "pass";
    } else return "fail";
  })();
}
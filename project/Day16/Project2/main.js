// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties
var Persone = function (name, yearOfBirth, job) {
  this.age = yearOfBirth;
  this.result = function (){
    return `${name} is a ${job} and ${this.calculateAge()} years old`
  } 
}
Persone.prototype.calculateAge = function (){
  var now = new Date();
  var year = now.getFullYear();
  return (year - this.age);
}

var hari = new Persone("hari", 1990, "Teacher")
var sachin = new Persone("sachin", 1985, "senior developer")
var sid = new Persone("sid", 1996, "philospher")




// Define a function name calculateAge which returns the age of the person



// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')



// call the calculateAge function on each object


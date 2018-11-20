//---CREATE QUESTIONS
var questions = [
  new Question("What is the capital of the USA?", ["New York", "Washington DC"], "Washington DC"),
  new Question("What is the capital of GERMANY?", ["Berlin", "Munich"], "Berlin"),
  new Question("What is the capital of AUSTRALIA?", ["Canberra", "Sydney"], "Canberra"),
  new Question("What is the capital of CHINA?", ["Shanghai", "Beijing"], "Beijing"),
  new Question("What is the capital of SPAIN?", ["Barcelona", "Madrid"], "Madrid"),
 new Question("What is the capital of CANADA?", ["Toronto", "Ottawa"], "Ottawa")
];

//---CREATE QUIZ
var quiz = new Quiz(questions);
console.log(quiz)

//DISPLAY QUIZ
QuizUI.displayNext();
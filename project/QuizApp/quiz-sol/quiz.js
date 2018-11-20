//---QUIZ CONSTRUCTOR
function Quiz (questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

//---GUESS PROTOTYPE
Quiz.prototype.guess = function(answer) {
  if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
    this.score++;
  }
  this.currentQuestionIndex++;
};

//---GetCurrentQuestion PROTOTYPE
Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex];
};


//---HasEnded PROTOTYPE
Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length;
};
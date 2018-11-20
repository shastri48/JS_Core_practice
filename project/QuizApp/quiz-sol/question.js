//---QUESTION CONSTRUCTOR
function Question (text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

//---IsCorrectAnswer PROTOTYPE
Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};


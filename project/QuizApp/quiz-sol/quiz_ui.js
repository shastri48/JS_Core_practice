var QuizUI = {
  
 displayNext: function() {
   if (quiz.hasEnded()) {
     this.displayScore();
   } else {
     this.displayQuestion();
     this.displayChoices();
     this.displayProgress();
   }
 }, //end displayNext
  
  displayQuestion: function() {
   this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  }, //end displayQuestion
  
  displayChoices: function() {
    var choices = quiz.getCurrentQuestion().choices;
    
    for(var i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
      }
   }, //end displayChoices
                        
  displayScore: function() {
   var gameOverHTML = "<h1>Game Over</h1>";
    gameOverHTML += `<h2>Your score is : ${quiz.score} Out of ${quiz.questions.length}</h2>`;
    this.populateIdWithHTML("quiz", gameOverHTML);
  }, //end displayScore
  
  populateIdWithHTML: function(id, text) {
   var element = document.getElementById(id);
    element.innerHTML = text;
  }, //end populateIdWithHTML
  
  guessHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  }, //end guessHandler
  
  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  } //end displayProgress
  
  } //end QuizUI var
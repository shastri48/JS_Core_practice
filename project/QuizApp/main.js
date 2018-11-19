var question = document.querySelector(".question");
var option = document.querySelector(".option")
var quiz = document.querySelector(".quiz")
var total = document.querySelector(".total")



class Question {
  constructor(text, choice, answer){
    this.text = text;
    this.choice = choice;
    this.answer = answer;
  }

}

var questionList = [
  new Question("How are you?", ["fine","not-fine"], "fine"),
  new Question("where are you?", ["home", "office"], "home"),
  new Question("what r u doing?", ["reading", "coding"], "reading"),
  new Question("what r u eating?", ["rice", "chapati"], "chapati")
];


class Quiz {
  constructor(){
    this.currentIndex = 0;
    this.nextIndex = 1;
    this.score = 0;
    // this.currentQuestion = questionList[this.currentIndex];
  }
  updateScore(){
      return ++this.score;
  }
  displayScore() {
    quiz.innerHTML = `Score is ${this.score}`;
  }
  updateQuestion(){
    this.currentIndex = this.nextIndex;
    this.nextIndex = this.currentIndex + 1;
  }
  displayQuestion(){
    if(this.currentIndex >= questionList.length){
      return this.displayScore();
    }
    question.innerHTML = questionList[this.currentIndex].text;
    total.innerHTML = `Question ${this.currentIndex + 1} out of ${questionList.length}`
    option.innerHTML = `<li>${questionList[this.currentIndex].choice[0]}</li>`;
    option.innerHTML += `<li>${questionList[this.currentIndex].choice[1]}</li>`;
  }
  display(e){
    if(e.target.innerHTML == questionList[this.currentIndex].answer){
      this.updateScore();
      this.updateQuestion();
      this.displayQuestion();
    } 
    else {
      this.updateQuestion();  
      this.displayQuestion();
    } 
  }
}


var newQuiz =new Quiz(questionList);
newQuiz.displayQuestion();





option.addEventListener("click", newQuiz.display.bind(newQuiz));
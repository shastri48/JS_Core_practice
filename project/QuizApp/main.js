// querySelectors
var question = document.querySelector(".question");
var option = document.querySelector(".option")
var quiz = document.querySelector(".quiz")
var total = document.querySelector(".total")
var category = document.querySelector(".quiz__category")
var welcome = document.querySelector(".welcome")



// Object class
class Question {
  constructor(text, choice, answer){
    this.text = text;
    this.choice = choice;
    this.answer = answer;
  }

}
// questionList
var questionListGeneral = [
  new Question("generralWhich of the following is the national animal of India?", ["Lion","Tiger"," Elephant","Rhinoceros"], "Lion"),
  new Question("generralHow many days are there in a Leap year?", ["365", "74", "366", "363"], "366"),
  new Question("generralYoung one of a cat is called?", ["puppy", "kitten", "horse", "cow"], "kitten"),
  new Question("generralHow many players are there in a cricket team?", ["22", "11", "6", "5"], "11")
];

var questionListHistory = [
  new Question("historyWhich of the following is the national animal of India?", ["Lion","Tiger"," Elephant","Rhinoceros"], "Lion"),
  new Question("historyHow many days are there in a Leap year?", ["365", "74", "366", "363"], "366"),
  new Question("historyYoung one of a cat is called?", ["puppy", "kitten", "horse", "cow"], "kitten"),
  new Question("historyHow many players are there in a cricket team?", ["22", "11", "6", "5"], "11")
];

var questionListPolitics = [
  new Question("politicsWhich of the following is the national animal of India?", ["Lion","Tiger"," Elephant","Rhinoceros"], "Lion"),
  new Question("politicsHow many days are there in a Leap year?", ["365", "74", "366", "363"], "366"),
  new Question("politicsYoung one of a cat is called?", ["puppy", "kitten", "horse", "cow"], "kitten"),
  new Question("politicsHow many players are there in a cricket team?", ["22", "11", "6", "5"], "11")
];

var questionListGeography = [
  new Question("geographyWhich of the following is the national animal of India?", ["Lion","Tiger"," Elephant","Rhinoceros"], "Lion"),
  new Question("geographyHow many days are there in a Leap year?", ["365", "74", "366", "363"], "366"),
  new Question("geographyYoung one of a cat is called?", ["puppy", "kitten", "horse", "cow"], "kitten"),
  new Question("geographyHow many players are there in a cricket team?", ["22", "11", "6", "5"], "11")
];

// classQuiz
class Quiz {
  constructor(questionList){
    this.quizQuestions = questionList;
    this.currentIndex = 0;
    this.nextIndex = 1;
    this.score = 0;
    this.category;
  }


  updateScore(){
      return ++this.score;
  }
  displayScore() {
      // quiz.innerHTML = `Score is ${this.score}`;
    if(this.score <= 2){
      quiz.innerHTML = `Score is ${this.score}<p>Poor Performance</p>`;
    } else
    if(this.score == 3){
      quiz.innerHTML = `Score is ${this.score}<p>Average Performance</p>`;
    } else
    if(this.score == 4){
      quiz.innerHTML = `Score is ${this.score}<p>Good Performance</p>`;
    }
  }
  updateQuestion(){
    this.currentIndex = this.nextIndex;
    this.nextIndex = this.currentIndex + 1;
  }
  displayQuestion(){
    if(this.currentIndex >= this.quizQuestions.length){
      return this.displayScore();
    }
    question.innerHTML = this.quizQuestions[this.currentIndex].text;
    total.innerHTML = `Question ${this.currentIndex + 1} out of ${this.quizQuestions.length}`
    option.innerHTML = `<li>${this.quizQuestions[this.currentIndex].choice[0]}</li>`;
    option.innerHTML += `<li>${this.quizQuestions[this.currentIndex].choice[1]}</li>`;
    option.innerHTML += `<li>${this.quizQuestions[this.currentIndex].choice[2]}</li>`;
    option.innerHTML += `<li>${this.quizQuestions[this.currentIndex].choice[3]}</li>`;
  }
  display(e){
    if(e.target.innerHTML == this.quizQuestions[this.currentIndex].answer){
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




// create new Object


function openCategory(e){
  if(e.target.classList.contains("category")){
    quiz.style.display = "block";
    welcome.style.display = "none";
  }
  if(e.target.innerHTML == "History"){
    var newQuizHistory =new Quiz(questionListHistory);
    newQuizHistory.displayQuestion();
    option.addEventListener("click", newQuizHistory.display.bind(newQuizHistory));
  }
  if(e.target.innerHTML == "General"){
    var newQuizGeneral =new Quiz(questionListGeneral);
    newQuizGeneral.displayQuestion();
    option.addEventListener("click", newQuizGeneral.display.bind(newQuizGeneral));
  }
  if(e.target.innerHTML == "Geography"){
    var newQuizGeography =new Quiz(questionListGeography);
    newQuizGeography.displayQuestion();
    option.addEventListener("click", newQuizGeography.display.bind(newQuizGeography))
  }
  if(e.target.innerHTML == "Politics"){
    var newQuizPolitics =new Quiz(questionListPolitics);
    newQuizPolitics.displayQuestion();
    option.addEventListener("click", newQuizPolitics.display.bind(newQuizPolitics));
  }
}







// eventListener

category.addEventListener("click", openCategory);

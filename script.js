// top header and main page variables
var scoresLink = document.getElementById("highscore-lnk");
var timer = document.querySelector("#timer");
var secondLeft = 75;
var welcomePage = document.getElementById("welcome-page");
var startQuizBtn = document.querySelector("#start-btn");

// for question pages
var questionAppearance = document.querySelector("#question-container");
var questionEl = document.getElementById("the-question");
var ansA = document.getElementById("choice-a");
var ansB = document.getElementById("choice-b");
var ansC = document.getElementById("choice-c");
var ansD = document.getElementById("choice-d");
//   whatever user choosed should navigate to next question
var toNextQuestion = document.querySelector(".ans");

var currentQuestion = 0;

// for scores and scores page
var userScore = 0;
var correctAnsrScore = + 20;
var wrongAnsrScore = 0;
var scndLess = - 10;
var ttlScores;
var initialsBtn;
var goBackBtn;
var clearHscoresBtn;
//    need calculation function to calculate scores

// arrey for all quiz questions and 4 answer options
var quizQuestions = [

{

question: "Commonly used data types Do Not Include:",
a: "strings",
b: "booleans",
c: "alerts",
d: "numbers",
correctAnswer: "c"

}, {

question: "The condition in an if / else statement is enclosed with _____.",
a: "quotes",
b: "curly brackets",
c: "parenthsis",
d: "square brackets",
correctAnswer: "c"

}, {

question: "Arrays in JavaScript can be used to store _____.",
a: "numbers and strings",
b: "other arrays",
c: "booleans",
d: "all of the above",
correctAnswer: "d"

}, {

question: "String values must be enclosed within _____ when being assigned to variables.",
a: "commas",
b: "curly brackets",
c: "quotes",
d: "parenthesis",
correctAnswer: "c"

}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
a: "JavaScript",
b: "terminal/bash",
c: "for loops",
d: "console.log",
correctAnswer: "d"
}

];




// If user press start quiz btn

function beginTimer() {
  var timerInterval = setInterval(function() {
timer.textContent = "Time: " + secondLeft;
secondLeft--;

if(secondLeft===0) {
  clearInterval(timerInterval);
  // sendMessage();
}
  }, 1000);
};


startQuizBtn.addEventListener ("click", startGame);

function startGame() {
  beginTimer();
  console.log("Game started");
  // welcomePage.classList.add("hide");
  // startQuizBtn.classList.add("hide");
  // questionAppearance.classList.remove("hide");
  // welcomePage.style.visibility= "hidden";
  welcomePage.style.display= "none";
  questionAppearance.style.visibility= "visible";
  questionAppearance.classList.add("activeQuestion");
  loadQuiz();
}


// function firstQuestionAppr( {
//   questionAppearance.classList.add("activeQuestion"); // show the 1st question
//     beginTimer();
//   });
  




// loadQuiz();

function loadQuiz() {

  var currentQuizData = quizQuestions[currentQuestion];
  questionEl.textContent = currentQuizData.question;
  ansA.textContent = currentQuizData.a;
  ansB.textContent = currentQuizData.b;
  ansC.textContent = currentQuizData.c;
  ansD.textContent = currentQuizData.d;

};

function getSelected() {
  var answers = document.querySelectorAll("ans");
  answers.forEach((ans) => {
      console.log(ans.value);  
  });
}

toNextQuestion.addEventListener("click", function() {
  currentQuestion++;
  getSelected();



  if(currentQuestion < quizQuestions.length) {
  loadQuiz();
} // else {}

});













// event.preventDefault();




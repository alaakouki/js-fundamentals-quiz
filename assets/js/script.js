// top header and main page variables
var highScoreLink = document.getElementById("highscore-lnk");
var timer = document.querySelector("#timer");
var secondLeft = 75;
var welcomePage = document.getElementById("welcome-page");


var start = document.getElementById("start-btn");
var timerInterval = 0;

// quiz questions variables
var questionAppearance = document.querySelector("#question-container");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var score = 0;
var answerIsCorrect = document.querySelector(".correct-hide");
var answerIsWrong = document.querySelector(".wrong-hide");

// // variables of scores and high scores page
var scoreContainerEl = document.getElementById("scoreContainer");
var finalScore = document.querySelector(".final-score");

var currentQuestion = 0;

// for scores and scores page
var userScore = 0;
var correctAnsrScore = 0;
var wrongAnsrScore = 0;
var initialsInput = document.querySelector(".initials");
var initialsBtn = document.querySelector(".initials-btn");


// arrey for all quiz questions and 4 answer options
var quizQuestions = [

  {
  
      question: "Commonly used data types Do Not Include:",
      choiceA: "strings",
      choiceB: "booleans",
      choiceC: "alerts",
      choiceD: "numbers",
      correct: "c"
      
      }, {
      
      question: "The condition in an if / else statement is enclosed with _____.",
      choiceA: "quotes",
      choiceB: "curly brackets",
      choiceC: "parenthsis",
      choiceD: "square brackets",
      correct: "c"
      
      }, {
      
      question: "Arrays in JavaScript can be used to store _____.",
      choiceA: "numbers and strings",
      choiceB: "other arrays",
      choiceC: "booleans",
      choiceD: "all of the above",
      correct: "d"
      
      }, {
      
      question: "String values must be enclosed within _____ when being assigned to variables.",
      choiceA: "commas",
      choiceB: "curly brackets",
      choiceC: "quotes",
      choiceD: "parenthesis",
      correct: "c"
      
      }, {
          question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choiceA: "JavaScript",
      choiceB: "terminal/bash",
      choiceC: "for loops",
      choiceD: "console.log",
      correct: "d"
      }
  
  ]


  var lastQuestionIndex = quizQuestions.length - 1;
var runningQuestionIndex = 0;

function renderQuestion(){
    var q = quizQuestions[runningQuestionIndex];

    question.innerHTML = "<p>" + q.question + "</p>" ;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}


function checkAnswer(answer) {
  answer = answer.toLowerCase();
if (quizQuestions[runningQuestionIndex].correct == answer) {
  console.log("good");
  score = score+20;

  answerIsCorrect.style.display= "block";
  answerIsCorrect.style.visibility = "visible";
  answerIsWrong.style.visibility = "hidden";
  answerIsWrong.style.display= "none";
  
} else {
  // pelanty for choosing wrong answer
  console.log("bad");
  secondLeft = secondLeft -10;

  answerIsWrong.style.visibility = "visible";
  answerIsWrong.style.display= "block";
  answerIsCorrect.style.visibility = "hidden";
  answerIsCorrect.style.display= "none";
  
}



if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    renderQuestion();

} else {
  clearInterval(timerInterval);
console.log(score);
scoreContainer();

}

}


// To start Quiz game
start.addEventListener ("click", startGame);

function startGame() {
  beginTimer();
  console.log("Game started");
  welcomePage.style.display= "none";
  questionAppearance.style.visibility= "visible";
  questionAppearance.classList.add("activeQuestion");
  renderQuestion();
}



// Time limit will start when user start the Quiz

function beginTimer() {
  timerInterval = setInterval(function() {
timer.textContent = "Time: " + secondLeft;
secondLeft--;

if(secondLeft===0) {
  clearInterval(timerInterval);
  sendMessage();
  scoreContainer();
}
  }, 1000);
};

function sendMessage() {
  timer.textContent = "It's Over!";
  console.log(score);  
  scoreContainer();

}


function scoreContainer() {

  questionAppearance.style.visibility = "hidden";
  questionAppearance.style.display= "none";

  answerIsWrong.style.visibility = "hidden";
  answerIsWrong.style.display= "none";

  answerIsCorrect.style.visibility = "hidden";
  answerIsCorrect.style.display= "none";

  scoreContainerEl.style.visibility = "visible";
  scoreContainerEl.style.display= "flex";
  finalScore.innerHTML = "Your final score is " + score;
  
}



initialsBtn.addEventListener( "click", function() {
addToHighScore();

})



// event.preventDefault();

function addToHighScore() {
  var highScores =
      JSON.parse(window.localStorage.getItem("hs-container")) || [];
  var initials = initialsInput.value.trim();
  if (initials !== "") {
      var newScore = {
          score, initials
      };
      // Saves information to localStorage
      highScores.push(newScore);
      window.localStorage.setItem("", JSON.stringify(highScores))
  }

  window.location.replace("highScore.html");  

}

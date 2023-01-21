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

var startQuiz = document.querySelector("#start-btn");
var secondLeft = 75;



function beginTimer() {
  var timerInterval = setInterval(function() {

secondLeft--;

if(secondLeft===0) {
  clearInterval(timerInterval);
  // sendMessage();
}
  }, 1000);
}

startQuiz.addEventListener ("click", function {
  beginTimer();
});

// function nextQuestion() {
    
// }





// event.preventDefault();


var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();



// // Access toggle switch HTML element
// var themeSwitcher = document.querySelector("#theme-switcher");
// var container = document.querySelector(".container");

// // Set default mode to dark
// var mode = "dark";

// // Listen for a click event on toggle switch
// themeSwitcher.addEventListener("click", function() {
//   // If mode is dark, apply light background
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   // If mode is light, apply dark background 
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });

var clearHighScoreBtn = document.querySelector("clear-highScore-btn");
var scoreList = document.getElementById("score-list");


/* utils.js */
module.exports = {
  doSomething: function() {
    // code
  },

  anotherOne: function() {
    // code
  }
};

// /* utils.js */
// module.exports = {
//   doSomething: function() {
//     // code
//   },

//   anotherOne: function() {
//     // code
//   }
// };
// /* index.js */
// const utils = require('./utils.js');
// utils.doSomething();


clearHighScoreBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

var highScoreEl = document.querySelector(".hs-container");

function viewHighScore() {
  var highScores =
  JSON.parse(window.localStorage.getItem("highscores")) || [];
  var highScoreHTML = "";
  for (var i = 0; i < highScores.length; i++) {
      var { score, initials } = highScores[i];
      highScoreHTML += `<li> ${initials}: ${score}</li>`
  }
  if (highScoreHTML === "") {
      highScoreHTML = "<h3> No Scores submitted yet.</h3>";
  }

  scoreList.innerHTML = highScoreHTML;
}

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
    viewHighScore();
}
var clearHighScoreBtn = document.querySelector(".clear-highScore-btn");
var scoreList = document.getElementById("scores-list");


clearHighScoreBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

var highScoreEl = document.querySelector(".hs-container");

function viewHighScore() {
    localStorage.setItem("highscores", initials);
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
viewHighScore();

var clearHighScoreBtn = document.querySelector("clear-highScore-btn");
var scoreList = document.getElementById("score-list");






clearHighScoreBtn.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});


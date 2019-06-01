$("#start").on("click", function clickStartGame() {
    simonSequence.push(Math.floor((Math.random() * 4) + 1));
    simonPlaying = true;
    playing = true;
    timerRunning = true;
    playGame();
    runningTimer();
});

function startGame() {
    simonSequence.push(Math.floor((Math.random() * 4) + 1));
    playGame();
}


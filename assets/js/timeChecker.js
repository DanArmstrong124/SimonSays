//Timer Checker

function gameOverTimer() {
    setInterval(function() {
        if (timeLeft <= 0) {
            playing = false;
            timerRunning = false;
            $("#timer").html('GAME OVER');
        }
    }, 500);
}

//Running Time

function runningTimer() {
    setInterval(function() {
        if (timerRunning == true) {
            timeLeft = timeLeft - 1;
            $("#timer").html(timeLeft)
        }
    }, 1000);
}

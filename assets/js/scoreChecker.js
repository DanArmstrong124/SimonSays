//Score Checker

function scoreChecker() {
    for (i = turn; i < simonSequence.length; i++) {
        if (userSequence[i] == simonSequence[i]) {
            points = points + 1;
            $("#pointsOnScreen").html(points);
            clickCounter();
        } else {
            gameOver();
        }
    }
}

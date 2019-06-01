function clickCounter() {
    turn++
    $("#turnOnScreen").html(turn);
    simonPlaying = true;
    userPlaying = false;
    startGame();
}
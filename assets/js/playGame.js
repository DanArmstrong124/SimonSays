function playGame() {
    if (playing == true) {
        console.log("Playing");
    }
    else if (playing == false) {
        console.log("Not Playing");
    }
    if (simonPlaying == true) {
        for (i = 0; i < simonSequence.length; i++) {
            if (simonSequence[i] == (1)) {
                $("#rs").addClass("clickedCorrectR");
                setTimeout(function() {
                    $("#rs").removeClass("clickedCorrectR").removeClass("clickedIncorrect");
                }, 500);
                simonPlaying = false;
                userPlaying = true;
            }
            else if (simonSequence[i] == (2)) {
                $("#gs").addClass("clickedCorrectG");
                setTimeout(function() {
                    $("#gs").removeClass("clickedCorrectG").removeClass("clickedIncorrect");
                }, 500);
                simonPlaying = false;
                userPlaying = true;
            }
            else if (simonSequence[i] == (3)) {
                $("#bs").addClass("clickedCorrectB");
                setTimeout(function() {
                    $("#bs").removeClass("clickedCorrectB").removeClass("clickedIncorrect");
                }, 500);
                simonPlaying = false;
                userPlaying = true;
            }
            else if (simonSequence[i] == (4)) {
                $("#ys").addClass("clickedCorrectY");
                setTimeout(function() {
                    $("#ys").removeClass("clickedCorrectY").removeClass("clickedIncorrect");
                }, 500);
                simonPlaying = false;
                userPlaying = true;
            }
        }
    }
}

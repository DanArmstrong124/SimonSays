//variables

var userSequence = [];
var simonSequence = [];
var turn = 0;
var timeLeft = 5;
var clickToRestart = 0;
var playing = false;
var simonPlaying = false;
var userPlaying = false;
var timerRunning = false;
// 1=Red 2=Green 3=Blue 4=Yellow

//PlayGame

function playGame() {
    if (playing == true) {
        console.log("Playing");
    } else if (playing == false) {
        console.log("Not Playing");
    }
    if (simonPlaying == true) {
        if (simonSequence[0] == (1)) {
            $("#rs").addClass("clickedCorrectR");
            setTimeout(function() {
                $("#rs").removeClass("clickedCorrectR").removeClass("clickedIncorrect");
            }, 500);
            simonPlaying = false;
        }
        else if (simonSequence[0] == (2)) {
            $("#gs").addClass("clickedCorrectG");
            setTimeout(function() {
                $("#gs").removeClass("clickedCorrectG").removeClass("clickedIncorrect");
            }, 500);
            simonPlaying = false;
        }
        else if (simonSequence[0] == (3)) {
            $("#bs").addClass("clickedCorrectB");
            setTimeout(function() {
                $("#bs").removeClass("clickedCorrectB").removeClass("clickedIncorrect");
            }, 500);
            simonPlaying = false;
        }
        else if (simonSequence[0] == (4)) {
            $("#ys").addClass("clickedCorrectY");
            setTimeout(function() {
                $("#ys").removeClass("clickedCorrectY").removeClass("clickedIncorrect");
            }, 500);
            simonPlaying = false;
        }
    }
}


//Simon Starts

//Timer Checker

/*setInterval(function() {
    if (timeLeft <= 0) {
        playing = false;
        timerRunning = false;
    }
}, 500);*/

//Choosing the colours using numbers

$("#start").on("click", function startGame() {
    simonSequence.push(Math.floor((Math.random() * 4) + 1));
    simonPlaying = true;
    playing = true;
    timerRunning = true;
    setInterval(function() {
        playGame();
/*        if (timerRunning == true) {
            timeLeft = timeLeft - 1;
            $("#timer").html(timeLeft)
        }*/
    }, 1000);
});


//Adjusting numbers into colours

/*for i in turn {
    if simonSequence(i) == 0 {
        //display green
    }
    else if simonSequence(i) == 1 {
        //display blue
    }
    else if simonSequence(i) == 2 {
        //display yellow
    }
    else if simonSequence(i) == 3 {
        //display red
    }
    else {
    console.log("ERROR");
    }
}*/

//User follows

//Red Pad

$("#rs").on('click', function() {
    $("#rs").addClass("clickedCorrectR");
    userSequence.push(1);
    setTimeout(function() {
        $("#rs").removeClass("clickedCorrectR").removeClass("clickedIncorrect");
    }, 500);
});

//Green Pad

$("#gs").on('click', function() {
    $("#gs").addClass("clickedCorrectG");
    userSequence.push(2);
    setTimeout(function() {
        $("#gs").removeClass("clickedCorrectG").removeClass("clickedIncorrect");
    }, 500);
});

//Blue Pad

$("#bs").on('click', function() {
    $("#bs").addClass("clickedCorrectB");
    userSequence.push(3);
    setTimeout(function() {
        $("#bs").removeClass("clickedCorrectB").removeClass("clickedIncorrect");
    }, 500);
});

//Yellow Pad

$("#ys").on('click', function() {
    $("#ys").addClass("clickedCorrectY");
    userSequence.push(4);
    setTimeout(function() {
        $("#ys").removeClass("clickedCorrectY").removeClass("clickedIncorrect");
    }, 500);
});

//Score Checker

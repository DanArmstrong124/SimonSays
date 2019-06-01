    //Red Pad

    $("#rs").on('click', function() {
        $("#rs").addClass("clickedCorrectR");
        userSequence.push(1);
        setTimeout(function() {
            $("#rs").removeClass("clickedCorrectR").removeClass("clickedIncorrect");
        }, 500);
        scoreChecker();
    });

    //Green Pad

    $("#gs").on('click', function() {
        $("#gs").addClass("clickedCorrectG");
        userSequence.push(2);
        setTimeout(function() {
            $("#gs").removeClass("clickedCorrectG").removeClass("clickedIncorrect");
        }, 500);
        scoreChecker();
    });

    //Blue Pad

    $("#bs").on('click', function() {
        $("#bs").addClass("clickedCorrectB");
        userSequence.push(3);
        setTimeout(function() {
            $("#bs").removeClass("clickedCorrectB").removeClass("clickedIncorrect");
        }, 500);
        scoreChecker();
    });

    //Yellow Pad

    $("#ys").on('click', function() {
        $("#ys").addClass("clickedCorrectY");
        userSequence.push(4);
        setTimeout(function() {
            $("#ys").removeClass("clickedCorrectY").removeClass("clickedIncorrect");
        }, 500);
        scoreChecker();
    });

var character = 0
var defender = 0
var playerHp = 0
var playerAp = 0
var counterAp = 0
var attackValue = 0




//click the character of players choice then clear the other characters when img1 is clicked to select the character
if (character == 0) {
    $(".char1").click(function () {
        $(".char2, .char3, .char4, #h4-2").hide();
        $(".char6, .char7, .char8, #h4-1").show();
        character = 1

    });

    $(".char2").click(function () {
        $(".char1, .char3, .char4, #h4-2").hide();
        $(".char5, .char7, .char8, #h4-1").show();
        character = 1
    });

    $(".char3").click(function () {
        $(".char1, .char2, .char4, #h4-2").hide();
        $(".char5, .char6, .char8, #h4-1").show();
        character = 1

    });
    $(".char4").click(function () {
        $(".char1, .char2, .char3, #h4-2").hide();
        $(".char5, .char6, .char7, #h4-1").show();
        character = 1

    });
}
else {

}

// click the enemy to attack then clears selected enemy and shows them at the defender location
if (defender == 0) {
    $(".char5").click(function () {
        $(".char5").hide();
        $(".char9").show();
        defender = 1

    });

    $(".char6").click(function () {
        $(".char6").hide();
        $(".char10").show();
        defender = 1
    });

    $(".char7").click(function () {
        $(".char7").hide();
        $(".char11").show();
        defender = 1
    });


    $(".char8").click(function () {
        $(".char8").hide();
        $(".char12").show();
        defender = 1

    });
}
else {

}







// this sets the images to restart the game
$("#btnReset").click(function () {
    $(".char1, .char2, .char3, .char4, #h4-3").show();
    $(".char5, .char6, .char7, .char8, .char9, .char10, .char11, .char12, #h4-1").hide();


});

// restartGame()

// document.getElementById("btnReset").onclick = restartGame;

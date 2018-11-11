
var character = 0
var defender = 0
var playerHp = 0
var playerAp = 0
var counterAp = 0
var attackValue = 0




//click the character of players choice then clear the other characters when img1 is clicked to select the character
$(".char1").click(function () {

    if (character == 0) {
        $(".char2, .char3, .char4, #h4-2").hide();
        $(".char6, .char7, .char8, #h4-1").show();
        character = 1
    }


});

$(".char2").click(function () {

    if (character == 0) {
        $(".char1, .char3, .char4, #h4-2").hide();
        $(".char5, .char7, .char8, #h4-1").show();
        character = 1
    }
});

$(".char3").click(function () {


    if (character == 0) {
        $(".char1, .char2, .char4, #h4-2").hide();
        $(".char5, .char6, .char8, #h4-1").show();
        character = 1
    }

});
$(".char4").click(function () {
    if (character == 0) {
        $(".char1, .char2, .char3, #h4-2").hide();
        $(".char5, .char6, .char7, #h4-1").show();
        character = 1
    }
});





// click the enemy to attack then clears selected enemy and shows them at the defender location

$(".char5").click(function () {
    if (defender == 0) {
        $(".char5").hide();
        $(".char9").show();
        defender = 1
    }
});

$(".char6").click(function () {
    if (defender == 0) {
        $(".char6").hide();
        $(".char10").show();
        defender = 1
    }
});

$(".char7").click(function () {
    if (defender == 0) {
        $(".char7").hide();
        $(".char11").show();
        defender = 1
    }
});


$(".char8").click(function () {
    if (defender == 0) {
        $(".char8").hide();
        $(".char12").show();
        defender = 1
    }
});


$("#attack").click(function () {




});





// this sets the images to restart the game
$("#btnReset").click(function () {
    $(".char1, .char2, .char3, .char4, #h4-3").show();
    $(".char5, .char6, .char7, .char8, .char9, .char10, .char11, .char12, #h4-1").hide();
    defender = 0
    character = 0

});

// restartGame()

// document.getElementById("btnReset").onclick = restartGame;

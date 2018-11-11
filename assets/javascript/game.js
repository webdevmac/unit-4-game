
var char1
var char2
var char3
var char4
var char5
var char6
var char7
var char8
var char9
var char10
var char11
var char12
var playerHp
var playerAp
var counterAp



//click the character of players choice then clear the other characters when img1 is clicked to select the character
$(".img1").click(function() {
    $(".char2, .char3, .char4, #h4-2").hide();
    $(".char6, .char7, .char8, #h4-1").show();
    

});
// click the enemy to attack then clears selected enemy and shows them at the defender location
$(".img2").click(function() {
    $(".char6, .char7, .char8, #h4-2").hide();
    $(".char9, .char7, .char8, #h4-1").show();
    

});




// this sets the images to restart the game
$("#btnReset").click(function () {
    $(".char5, .char6, .char7, .char8, .char9, .char10, .char11, .char12, #h4-1, #h4-3").hide();
    alert("reset works");

});

// restartGame()

// document.getElementById("btnReset").onclick = restartGame;

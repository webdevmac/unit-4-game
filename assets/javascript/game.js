

var playerSelected = 0
var defenderSelected = 0
var player
var defender
var playerHp = 0
var counterHp = 0


var char1healthPower = 64
var char2healthPower = 48
var char3healthPower = 58
var char4healthPower = 54


function healthPower() {

    document.getElementById("labelchar1-2").innerHTML = "HP: " + char1healthPower;
    document.getElementById("labelchar2-2").innerHTML = "HP: " + char2healthPower;
    document.getElementById("labelchar3-2").innerHTML = "HP: " + char3healthPower;
    document.getElementById("labelchar4-2").innerHTML = "HP: " + char4healthPower;
    document.getElementById("labelchar5-2").innerHTML = "HP: " + char1healthPower;
    document.getElementById("labelchar6-2").innerHTML = "HP: " + char2healthPower;
    document.getElementById("labelchar7-2").innerHTML = "HP: " + char3healthPower;
    document.getElementById("labelchar8-2").innerHTML = "HP: " + char4healthPower;
    document.getElementById("labelchar9-2").innerHTML = "HP: " + char1healthPower;
    document.getElementById("labelchar10-2").innerHTML = "HP: " + char2healthPower;
    document.getElementById("labelchar11-2").innerHTML = "HP: " + char3healthPower;
    document.getElementById("labelchar12-2").innerHTML = "HP: " + char4healthPower;


}






//click the character of players choice then clear the other characters when img1 is clicked to select the character
$(".char1").click(function () {

    if (playerSelected == 0) {
        $(".char2, .char3, .char4, #h4-2").hide();
        $(".char6, .char7, .char8, #h4-1").show();
        playerSelected = 1
        player = "char1"

    }


});

$(".char2").click(function () {

    if (playerSelected == 0) {
        $(".char1, .char3, .char4, #h4-2").hide();
        $(".char5, .char7, .char8, #h4-1").show();
        playerSelected = 1
        player = "char2"
    }
});

$(".char3").click(function () {


    if (playerSelected == 0) {
        $(".char1, .char2, .char4, #h4-2").hide();
        $(".char5, .char6, .char8, #h4-1").show();
        playerSelected = 1
        player = "char3"
    }

});
$(".char4").click(function () {
    if (playerSelected == 0) {
        $(".char1, .char2, .char3, #h4-2").hide();
        $(".char5, .char6, .char7, #h4-1").show();
        playerSelected = 1
        player = "char4"
    }
});





// click the enemy to attack then clears selected enemy and shows them at the defender location

$(".char5").click(function () {
    if (defenderSelected == 0) {
        $(".char5").hide();
        $(".char9").show();
        defenderSelected = 1
        defender = "char5"
    }
});

$(".char6").click(function () {
    if (defenderSelected == 0) {
        $(".char6").hide();
        $(".char10").show();
        defenderSelected = 1
        defender = "char6"
    }
});

$(".char7").click(function () {
    if (defenderSelected == 0) {
        $(".char7").hide();
        $(".char11").show();
        defenderSelected = 1
        defender = "char7"
    }
});


$(".char8").click(function () {
    if (defenderSelected == 0) {
        $(".char8").hide();
        $(".char12").show();
        defenderSelected = 1
        defender = "char8"
    }
});


$("#attack").click(function () {





    switch (player) {

        case "char1":
            char1healthPower -= 8
            playerHp = char1healthPower
            healthPower();
            alert("char1" + playerHp);
            break;
        case "char2":
            char2healthPower -= 4
            playerHp = char2healthPower
            healthPower();
            break;
        case "char3":
            char3healthPower -= 2
            playerHp = char3healthPower
            healthPower();
            break;
        case "char4":
            char4healthPower -= 6
            playerHp = char4healthPower
            healthPower();
            break;
    }

    switch (defender) {

        case "char5":
            char1healthPower -= 6
            counterHp = char1healthPower
            healthPower();
            break;
        case "char6":
            char2healthPower -= 8
            counterHp = char2healthPower
            healthPower();
            break;

        case "char7":
            char3healthPower -= 4
            counterHp = char3healthPower
            healthPower();
            break;

        case "char8":
            char4healthPower -= 6
            counterHp = char4healthPower
            healthPower();
            break;
    }

    if (playerHp <= 0) {
        $("p").append("You were defeated by" + devender);
        alert(devender);
        break;
    }
    else if (counterHp <= 0) {
        $("p").append("");
        alert(player);
        break;
    }

});





// this sets the images to restart the game
$("#btnReset").click(function () {
    $(".char1, .char2, .char3, .char4, #h4-3").show();
    $(".char5, .char6, .char7, .char8, .char9, .char10, .char11, .char12, #h4-1").hide();
    playerSelected = 0
    defenderSelected = 0
    player
    defender
    playerHp = 0
    playerAp = 0
    counterHp = 0
    attackValue = 6

    char1healthPower = 64
    char2healthPower = 48
    char3healthPower = 58
    char4healthPower = 54
    healthPower();
});

// restartGame()

// document.getElementById("btnReset").onclick = restartGame;


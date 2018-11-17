

var playerSelected = 0
var defenderSelected = 0
var player
var defender
var defenderAp = 4
var playerAp = 8
var playerHp = 0
var counterHp = 0
var defNumber = 0


var char1healthPower = 57
var char2healthPower = 56
var char3healthPower = 54
var char4healthPower = 55


function clearHp() {

char1healthPower = 0
char2healthPower = 0
char3healthPower = 0
char4healthPower = 0
}

//this places the Health Power in the bottom label of each player
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
// restart function starts the game over resets all the variables to the starting values
function restart() {
$(".char1, .char2, .char3, .char4, #h4-3").show();
$(".char5, .char6, .char7, .char8, .char9, .char10, .char11, .char12, #h4-1").hide();
playerSelected = 0
defenderSelected = 0
player
defender
playerHp = 0
playerAp = 8
counterHp = 0
defNumber = 0
defenderAp = 4
char1healthPower = 48
char2healthPower = 52
char3healthPower = 44
char4healthPower = 46
$("p").hide();
$("attack").show();
healthPower();

}
restart();

// this sets the images to restart the game
$("#btnReset").click(restart);





//click the character of players choice then clear the other characters when img1 is clicked to select the character


$(".char1").click(function () {


    if (playerSelected == 0) {
        $(".char2, .char3, .char4, #h4-2, .space").hide();
        $(".char6, .char7, .char8, #h4-1").show();
        playerSelected = 1
        player = "char1"

    }


});

$(".char2").click(function () {

    if (playerSelected == 0) {
        $(".char1, .char3, .char4, #h4-2, .space").hide();
        $(".char5, .char7, .char8, #h4-1").show();
        playerSelected = 1
        player = "char2"
    }
});

$(".char3").click(function () {


    if (playerSelected == 0) {
        $(".char1, .char2, .char4, #h4-2, .space").hide();
        $(".char5, .char6, .char8, #h4-1").show();
        playerSelected = 1
        player = "char3"
    }

});
$(".char4").click(function () {
    if (playerSelected == 0) {
        $(".char1, .char2, .char3, #h4-2, .space").hide();
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
        defender = "char9"
        defNumber ++
        $("p").hide();
    }
});

$(".char6").click(function () {
    if (defenderSelected == 0) {
        $(".char6").hide();
        $(".char10").show();
        defenderSelected = 1
        defender = "char10"
        defNumber ++
        $("p").hide();
    }
});

$(".char7").click(function () {
    if (defenderSelected == 0) {
        $(".char7").hide();
        $(".char11").show();
        defenderSelected = 1
        defender = "char11"
        defNumber ++
        $("p").hide();
    }
});


$(".char8").click(function () {
    if (defenderSelected == 0) {
        $(".char8").hide();
        $(".char12").show();
        defenderSelected = 1
        defender = "char12"
        defNumber +
        $("p").hide();
    }
});

// this function runs when the attack button is clicked on
$("#attack").click(function () {

// this switch looks for the charactor the player selected
// so the health power is subtracted from the selected player
    switch (player) {

        case "char1":
            char1healthPower -= defenderAp
            playerHp = char1healthPower
            healthPower();
            break;
        case "char2":
            char2healthPower -= defenderAp
            playerHp = char2healthPower
            healthPower();
            break;
        case "char3":
            char3healthPower -= defenderAp
            playerHp = char3healthPower
            healthPower();
            break;
        case "char4":
            char4healthPower -= defenderAp
            playerHp = char4healthPower
            healthPower();
            break;
    }

    // this switch looks for the selected defender
    // so the health power is subtracted from the selected defender
    switch (defender) {

        case "char9":
            char1healthPower -= playerAp
            counterHp = char1healthPower
            healthPower();
            break;
        case "char10":
            char2healthPower -= playerAp
            counterHp = char2healthPower
            healthPower();
            break;

        case "char11":
            char3healthPower -= playerAp
            counterHp = char3healthPower
            healthPower();
            break;

        case "char12":
            char4healthPower -= playerAp
            counterHp = char4healthPower
            healthPower();
            break;
    }
// when the players health power is to zero game over/ else when the defenders power is to zero select another enemy to fight
    if (playerHp <= 0) {
        $("#loose").show();
        playerHp = 0
        clearHp();
        
    }
    else if (counterHp <= 0 && defNumber == 3) {
        $("#winAll").show();
        $("#win").hide();
        $("attack").hide();
        defenderSelected = 0
        counterHp = 0
        clearHp();
        $(`.${defender}`).hide();
        
    }
    else if (counterHp <= 0) {
        $("#win").show();
        defenderSelected = 0
        counterHp = 0
        $(`.${defender}`).hide();
        
    }
    else {playerAp ++
        console.log(playerAp)
    }

});









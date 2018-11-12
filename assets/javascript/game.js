
var char1 = 0
var defender = 0 
var playerHp = 0
var playerAp = 0
var counterAp = 0
var attackValue = 6
 
var char1healthPower = 60
var char2healthPower = 45
var char3healthPower = 40
var char4healthPower = 50


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
console.log(defender);
console.log(playerHp);





//click the character of players choice then clear the other characters when img1 is clicked to select the character
$(".char1").click(function () {

    if (char1 == 0) {
        $(".char2, .char3, .char4, #h4-2").hide();
        $(".char6, .char7, .char8, #h4-1").show();
        char1 = 1

    }


});

$(".char2").click(function () {

    if (char2 == 0) {
        $(".char1, .char3, .char4, #h4-2").hide();
        $(".char5, .char7, .char8, #h4-1").show();
        char2 = 1
    }
});

$(".char3").click(function () {


    if (char3 == 0) {
        $(".char1, .char2, .char4, #h4-2").hide();
        $(".char5, .char6, .char8, #h4-1").show();
        char3 = 1
    }

});
$(".char4").click(function () {
    if (char4 == 0) {
        $(".char1, .char2, .char3, #h4-2").hide();
        $(".char5, .char6, .char7, #h4-1").show();
        char4 = 1
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





switch(1){

case char1:
    char1healthPower -= 5   
    healthPower(); 
    alert("char1" + char1healthPower);


    case char2:
    char2healthPower -= 5   
    healthPower(); 
    alert("char2" + char2healthPower);

    case char3:
    char3healthPower -= 5   
    healthPower(); 
    alert("char3" + char3healthPower);

    case char4:
    char4healthPower -= 5   
    healthPower(); 
    alert("char4" + char4healthPower);

    case char5:
    char1healthPower -= 10   
    healthPower(); 
    alert("char5" + char1healthPower);

    case char6:
    char2healthPower -= 10   
    healthPower(); 
    alert("char6" + char2healthPower);

    case char7:
    char3healthPower -= 10   
    healthPower(); 
    alert("char7" + char3healthPower);

    case char8:
    char4healthPower -= 10   
    healthPower(); 
    alert("char8" + char4healthPower);

    


}




//     if(char1 == 1){
//     char1healthPower -= 5   
//     healthPower(); 
//     alert(char1healthPower);  
// }
// else if(char2 == 1){
//     char2healthPower -= 5
//     healthPower();
// }
// else if(char3 == 1){
//     char3healthPower -= 5
//     healthPower();
// }
// else if(char4 == 1){
//     char4healthPower -= 5
//     healthPower();
// }


// if(char5 == 1){
//     char1healthPower -= 10   
//     healthPower(); 
     
// }
// else if(char6 == 1){
//     char2healthPower -= 10
//     alert(char2healthPower);
//     healthPower();
// }
// else if(char7 == 1){
//     char3healthPower -= 10
//     healthPower();
// }
// else if(char8 == 1){
//     char4healthPower -= 10
//     healthPower();
// }




});





// this sets the images to restart the game
$("#btnReset").click(function () {
    $(".char1, .char2, .char3, .char4, #h4-3").show();
    $(".char5, .char6, .char7, .char8, .char9, .char10, .char11, .char12, #h4-1").hide();
    defender = 0
    playerHp = 0
    char1 = 0
    char2 = 0
    char3 = 0
    char4 = 0
    healthPower();
});

// restartGame()

// document.getElementById("btnReset").onclick = restartGame;


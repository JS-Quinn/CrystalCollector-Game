$(document).ready(function() {

    // Create Variables
    var computerPick = [];
    var userPick = 0;

    // 1) Generate random number between 1 & 120 for computerPick
    // log result for testing
    var randomComputer = Math.floor(Math.random() * 120) +1;
    computerPick = randomComputer;
    console.log(computerPick);

    // 2) Generate 4 random numbers between 1 & 12 as userPick options
    // log result for testing
    // I want the game to always be win-able for this project's sake, which requires there to
    // always be a "1" option. To do this, the last option is set to "randomly generate" a number,
    // but its only option is 1. 

    // Btn1
    var randomUser1 = Math.floor(Math.random() * 12) +1;
    btn1 = randomUser1;
    console.log(btn1);
    // Btn2
    var randomUser2 = Math.floor(Math.random() * 12) +1;
    btn2 = randomUser2;
    console.log(btn2);
    // Btn3
    var randomUser3 = Math.floor(Math.random() * 12) +1;
    btn3 = randomUser3;
    console.log(btn3);
    // Btn4
    var randomUser4 = Math.floor(Math.random() * 1) +1;
    btn4 = randomUser4;
    console.log(btn4);

    // 3) On-click, add together randomUser numbers and assign to userPick
    //log reult for testing
    
    $(".btn1").on("click", function() {
        userPick += btn1;
        if(userPick === computerPick) {
            console.log("You win!");
        }
    
        else if(userPick > computerPick) {
            console.log("You lose!");
        }
        console.log(userPick);
    });

    $(".btn2").on("click", function() {
        userPick += btn2;
        if(userPick === computerPick) {
            console.log("You win!");
        }
    
        else if(userPick > computerPick) {
            console.log("You lose!");
        }
        console.log(userPick);
    });

    $(".btn3").on("click", function() {
        userPick += btn3;
        if(userPick === computerPick) {
            console.log("You win!");
        }
    
        else if(userPick > computerPick) {
            console.log("You lose!");
        }
        console.log(userPick);
    });

    $(".btn4").on("click", function() {
        userPick += btn4;
        if(userPick === computerPick) {
            console.log("You win!");
        }
    
        else if(userPick > computerPick) {
            console.log("You lose!");
        }

        console.log(userPick);
    });

    // 4) If userPick === computerPick, then add 1 to wins
    //    If userPick > computerPick, then add 1 to losses

    
});
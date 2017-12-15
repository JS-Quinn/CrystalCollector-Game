$(document).ready(function() {

    // Create Variables
    var gemOneValue;
    var gemTwoValue;
    var gemThreeValue;
    var gemFourValue;
    var computerPick;
    var userPick;
    var wins = 0;
    var losses = 0;

    //------------------------------
    // GAME SET UP FUNCTIONS
    //------------------------------

    // Function to initialize game and log variables
    function initializeVariables() {
        computerPick = Math.floor(Math.random() * 120) +1;
        gemOneValue = Math.floor(Math.random() * 12) +1;
        gemTwoValue = Math.floor(Math.random() * 12) +1;
        gemThreeValue = Math.floor(Math.random() * 12) +1;
        gemFourValue = Math.floor(Math.random() * 1) +1;
        userPick = 0;
        $("#wins").html("Wins " + wins);
        $("#losses").html("Losses " + losses);
        $("#computerPick").html(computerPick);
        $("#userPick").html(userPick);
        consoleLogVariables();
    }

    // Funtion to check check win/loss state and reset game

    function checkWinState() {
        if(userPick === computerPick) {
            wins++;
            console.log("You win!");
            initializeVariables();
        }
    
        else if(userPick > computerPick) {
            losses++;
            console.log("You lose!");
            initializeVariables();
        }
    }

    // Function for debugging

    function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("gemOneValue: ", gemOneValue + " gemTwoValue: " + gemTwoValue + " gemThreeValue: " + gemThreeValue + " gemFourValue: " + gemFourValue);
		console.log("computerPick: " + computerPick + " userPick: " + userPick);
		console.log("----------------------------------");

    }
    
    //---------------------------------
    // GAME EXECUTION
    //---------------------------------

    initializeVariables();

    $(".gem").on("click", function() {
        var pressed = $(this).attr("value");
        console.log(pressed);
        if (pressed == "gem1") {
            userPick += gemOneValue;
        } else if (pressed == "gem2") {
            userPick += gemTwoValue;
        } else if(pressed == "gem3") {
             userPick += gemThreeValue;
        } else if(pressed == "gem4") {
            userPick += gemFourValue;
        }
        $("#userPick").html(userPick);
        consoleLogVariables();
        checkWinState();
    });

});
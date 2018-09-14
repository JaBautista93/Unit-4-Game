
// Create Variables to hold references
$("#randNum").text(RandNum)
//$("#Status").text(Status)
$("#Win").text(Win)
$("#Loss").text(Loss)
//$("#button").text(button)
$("#TotalScore").text(TotalScore)
$("#TotalCounter").text(TotalCounter)

//This section holds variables

//Random number generator for the computer
var RandNum = Math.floor((Math.random() * 102) + 19); 
    console.log(RandNum)
    $("#randNum").text(RandNum)

//This tells us how many wins and losses
var win = 0
var loss = 0

//create a random number for the buttons
    $(".button").on("click", function() {
        var RandGumNum = Math.floor((Math.random() * 12) + 1)
        console.log(RandGumNum)
    });
//cli





 //wins and losses







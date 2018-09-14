//This section holds variables
var Document
var TotalCounter = 0
var TotalScore = 0
var win = 0
var loss = 0
var finalTotal
var randNum
var buttonNumber

//Random number generator for the computer
 $( document ).ready(function(){
    var RandNum = Math.floor((Math.random() * 102) + 19); 
    console.log(RandNum)
    $("#randNum").text(RandNum)
   
//Creates Random numbers for each of the Button Values
buttonNumber =  Math.floor((Math.random() * 12) + 1)
console.log(buttonNumber)
$("#btnClose1").val(buttonNumber)

buttonNumber = Math.floor((Math.random() * 12) + 1)
console.log(buttonNumber)
$("#btnClose2").val(buttonNumber)

buttonNumber = Math.floor((Math.random() * 12) + 1)
console.log(buttonNumber)
$("#btnClose3").val(buttonNumber)

buttonNumber = Math.floor((Math.random() * 12) + 1)
console.log(buttonNumber)
$("#btnClose4").val(buttonNumber)

//Should add button clicks together on a counter
    $(".button button").on("click", function() {
        TotalScore += parseInt($(this).val());
        console.log(TotalScore)
        $("#TotalScore").text(TotalScore)
        if (TotalScore === RandNum){
            alert("you Win");
            win++;
        }  
        else if (TotalScore > RandNum){
            alert("you are a loser");
            Loss++;
        }
    });


//wins and losses
$("#win").text(win)
$("#loss").text(loss)


//When you click Gummys
// $('.btnClose1').on ('click', function(){
//     TotalCounter = TotalCounter + btnClose1;
//     console.log("New TotalCounter= " + btnClose1);
//     $('#finalTotal').text(TotalCounter); 
//           //win/lose cond.
//         if (TotalCounter == RandNum){
//           Win();
//         }
//         else if ( TotalCounter > RandNum){
//           loser();
//         }   
//   })  
 
}); 











// //adds the wins to the TotalScore
// function winner(){
//     alert("You Beat the Gummy Invaders!");
//       wins++; 
//       $('#TotalWins').text(TotalWin);
//       reset();
//     }
//     //addes the losses to the TotalScore
//     function Loser(){
//     alert ("You have Diabeties!");
//       loss++;
//       $('#TotalLoss').text(TotalLoss);
//       reset()

// //Game Reset
// function Reset(){
//     RandNum = Math.floor((Math.random() * 102) + 19);
//     btnClose1 =  Math.floor((Math.random() * 12) + 1);
//     btnClose2 = Math.floor((Math.random() * 12) + 1);
//     btnClose3 = Math.floor((Math.random() * 12) + 1);
//     btnClose4 = Math.floor((Math.random() * 12) + 1);
//     TotalCounter = 0
//     $('#TotalCounter').text(TotalCounter);
//  }


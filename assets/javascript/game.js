//This section holds variables
var Document
var TotalCounter = 0
var TotalScore = 0
var win = 0
var loss = 0
var finalTotal
var randNum
var buttonNumber

//adds the wins to the TotalScore
function winner(){
    alert("You Beat the Gummy Invaders!");
     // wins++; 
      //$("#win").text(win);
      //reset();
    }
    //addes the losses to the TotalScore
    function Loser(){
    alert ("You have Diabeties!");
      //loss++;
      //$("#loss").text(loss);
      //reset()
    }

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
            //win();

        }  
        else if (TotalScore > RandNum){
            alert("you are a loser");
            Loss++;
            //loser();
        }
    });

    //Need to fix what happends when you lose and win and need to figure out why my function isn't being called and loaded
    // also need a reset function.  Could use that function I saw on the previous page.  Also could make my  page prettier
    // work on CSS to give it some life.  


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
















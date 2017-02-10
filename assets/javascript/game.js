
// display results on the web page

function showResults(wins, loss, target, msg, score ){
 console.log("showResults");
 $(".results").text(msg);
 var newDiv = $("<div>").text("Wins: " + wins);
 $(".results").append(newDiv);
 $(".results").append("Loss: " + loss);
 $("#number-to-guess").text(targetNumber);
 $("#score").text(score);

}


// initialize buttons to be displayed
function initializeButton(crystalBtn) {
    $("#crystals").empty();
    for (var i = 0; i < imageFile.length; i++) {
        crystalBtn = $("<img>");
        crystalBtn.addClass("crystal-button");
        crystalBtn.attr("src", imageFile[i]);
         var ranNbr = Math.floor(Math.random() * 12)+1;
          console.log(ranNbr + " random number");
        crystalBtn.attr("data-value", ranNbr); // <button data-letter="a" class="letter-button letter letter-button-color"></button>
        $("#crystals").append(crystalBtn);

      };}

// set the target number to be reached
function initializeTarget() {
         var tgt = Math.round(Math.random() * (120-19))+19;
         return tgt;
       }


var targetNumber;
var winTotal = 0;
var lossTotal = 0;
var message = "";
var counter = 0;
var imageFile = ["assets/images/gem1.jpg", "assets/images/gem2.jpg", "assets/images/gem3.jpg", "assets/images/gem4.jpg"];
var scoreTot = 0;
var crystalBtn;
var newGame = false;
 


// establish the web page
      initializeButton(crystalBtn);         
      targetNumber = initializeTarget();
      showResults(winTotal, lossTotal, targetNumber, message, scoreTot);


// wait for click of a button
   
       $(".crystal-button").on("click", function() {
       
// if it is a new game, establish initial variables
        if (newGame) { 
          console.log("newGame");
          newGame = false;
          message = "";
          targetNumber =  initializeTarget();
           };

       console.log("mouse clicked " + $(this).data("value"));

// grab the value of the button
       scoreTot += $(this).data("value");
       console.log("scoreTot after data " + scoreTot);
       
       console.log(scoreTot + " score ");
       console.log(targetNumber + " target ");
       console.log(message + " before if statement")
  
// check if total accumulated points is equal to target or it points went over
       if (targetNumber < scoreTot) {
           console.log(scoreTot + " score ");
           console.log(targetNumber + " target ");
           console.log(" you lost " + targetNumber);
           message = "You Lost!";
           newGame = true;
           lossTotal++;
           initializeButton(crystalBtn);
           scoreTot = 0;


       } else if (targetNumber == scoreTot) {
            
            initializeButton(crystalBtn);

            console.log("you won");
            
            winTotal++;
            message = "You won!";
            newGame = true;
            scoreTot = 0;
       } 
       showResults(winTotal, lossTotal, targetNumber, message, scoreTot);
      });
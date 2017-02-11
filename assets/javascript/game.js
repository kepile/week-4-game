
// display results on the web page

function showResults(wins, loss, target, msg, score ){
 
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
         
        crystalBtn.attr("data-value", ranNbr); // <button data-letter="a" class="letter-button letter letter-button-color"></button>
        $("#crystals").append(crystalBtn);

      };}


function changeValue () {
  $('.crystal-button').each(function(){
  $(this).removeData("value");
  var ranNbr = Math.floor(Math.random() * 12)+1;
  $(this).attr("data-value", ranNbr);
  });

}




// set the target number to be reached
function initializeTarget(crystalBtn) {
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
    
//     for (var i = 0; i < imageFile.length; i++) {
//         crystalBtn = $("<img>");
//         crystalBtn.addClass("crystal-button");
//         crystalBtn.attr("src", imageFile[i]);
//          var ranNbr = Math.floor(Math.random() * 12)+1;
         
//         crystalBtn.attr("data-value", ranNbr); // <button data-letter="a" class="letter-button letter letter-button-color"></button>
//         $("#crystals").append(crystalBtn);
// }

      targetNumber = initializeTarget();
      showResults(winTotal, lossTotal, targetNumber, message, scoreTot);


// wait for click of a button
   
$(".crystal-button").on("click", function() {
       
// if it is a new game, reset the message
        if (newGame) { 
          newGame = false;
          message = "";
        
           };

      

// grab the value of the button
       scoreTot += $(this).data("value");
  
      
// check if total accumulated points is equal to target or it points went over
       if (targetNumber < scoreTot) {
           message = "You Lost!";
           newGame = true;
           lossTotal++;
           changeValue();
            // $(".crystal-button").each(function(){
            //  $(this).removeData("value");
            //   var ranNbr = Math.floor(Math.random() * 12)+1;
            //   console.log("***************************");
            //    console.log("math.random " + ranNbr);
            //   $(this).attr("data-value", ranNbr);
            //   // $(this).data('value', ranNbr); 
            //    console.log($(this).data("value")  + "is the crystal button with this"); 
            //  });
              
           targetNumber =  initializeTarget();
           scoreTot = 0;


       } else if (targetNumber == scoreTot) {
           targetNumber =  initializeTarget();
           changeValue();
           // $(".crystal-button").each(function(){
           //   $(this).removeData("value");
           //    var ranNbr = Math.floor(Math.random() * 12)+1;

           //    $(this).attr("data-value", ranNbr);
           //    });
              
            winTotal++;
            message = "You won!";
            newGame = true;
            scoreTot = 0;
       } 
       showResults(winTotal, lossTotal, targetNumber, message, scoreTot);
      });
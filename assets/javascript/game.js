
//jQuery//
$( document ).ready(function() {

//-----GLOBAL VARIABLES----//
// create a random number from 1 -120 and a variable to hold it named targetNumber
var targetNumber =  Math.floor(math.random() * 101) + 19; 

//match div html with targetNumber 
$("#target-number").text(targetNumber);

//random value for aguamarina, rubi, topaz, purple
var randomBlue = Math.floor(math.random()*11) + 1;
var randomPurple = Math.floor(math.random()*11) + 1;
var randomRubi = Math.floor(math.random()*11) + 1;
var randomTopaz = Math.floor(math.random()*11) + 1;
console.log(randomBlue);

//Variables for wins loose
var wins = 0;
var loss = 0;
//Variable that tracks users counter adds up the clicks of the gems
var totalScore = 0;

//------------------GAME LOOP FUNCTIONS--------------//
//On.click event for aguamarina gem 
$("#blue-gem").on("click", function() {
  //when the blue is clicked the totalScore adds up the blue gem value
    totalScore += randomBlue;
      console.log(totalScore);
      $("#total-score").text(totalScore);
  //first condition: if totalScore === targetNumber then,  win ++
    if (totalScore === targetNumber) {
      alert("NEW GEM! YOU WIN");
      wins++;
      $("#total-wins").text(wins);
      resetGame();
    }
  //second condition: if totalScore > targetNumber then, loss ++
    else if (totalScore > targetNumber) {
      alert("NO GEMS FOR YOU, LOOSER!");
      loss++;
      $("#total-loss").text(loss);
      resetGame();
    }
  });
 
//on.click event for purple
$("#purple-gem").on("click", function() {
  //when the blue is clicked the totalScore adds up the blue gem value
    totalScore += randomPurple;
      console.log(totalScore);
      $("#total-score").text(totalScore);
  //first condition: if totalScore === targetNumber then,  win ++
    if (totalScore === targetNumber) {
      alert("NEW GEM! YOU WIN");
      wins++;
      console.log("this are your wins" + wins);
      $("#total-wins").text(wins);
      resetGame();
    }
  //second condition: if totalScore > targetNumber then, loss ++
    else if (totalScore > targetNumber) {
      alert("NO GEMS FOR YOU, LOOSER!");
      loss++;
      console.log("this are your looses" + loss);
      $("#total-loss").text(loss);
      resetGame();
    }
  });

//on.click event for rubi
$("#rubi-gem").on("click", function() {
  //when the blue is clicked the totalScore adds up the blue gem value
    totalScore += randomRubi;
      console.log(totalScore);
      $("#total-score").text(totalScore);
  //first condition: if totalScore === targetNumber then,  win ++
    if (totalScore === targetNumber) {
      alert("NEW GEM! YOU WIN");
      wins++;
      console.log("this are your wins" + wins);
      $("#total-wins").text(wins);
      resetGame();
    }
  //second condition: if totalScore > targetNumber then, loss ++
    else if (totalScore > targetNumber) {
      alert("NO GEMS FOR YOU, LOOSER!");
      loss++;
      console.log("this are your looses" + loss);
      $("#total-loss").text(loss);
      resetGame();
    }
});

//on.click event for topaz
$("#topaz-gem").on("click", function() {
  //when the blue is clicked the totalScore adds up the blue gem value
    totalScore += randomTopaz;
      console.log(totalScore);
      $("#total-score").text(totalScore);
  //first condition: if totalScore === targetNumber then,  win ++
    if (totalScore === targetNumber) {
      alert("NEW GEM! YOU WIN");
      wins++;
      console.log("this are your wins" + wins);
      $("#total-wins").text(wins);
      resetGame();
    }
  //second condition: if totalScore > targetNumber then, loss ++
    else if (totalScore > targetNumber) {
      alert("NO GEMS FOR YOU, LOOSER!");
      loss++;
      console.log("this are your looses" + loss);
      $("#total-loss").text(loss);
      resetGame();
    }
});
  var resetGame = function(){
     totalScore = 0;
     var randomBlue = Math.floor(math.random()*11) + 1;
     var randomPurple = Math.floor(math.random()*11) + 1;
     var randomRubi = Math.floor(math.random()*11) + 1;
     var randomTopaz = Math.floor(math.random()*11) + 1;

  }

});

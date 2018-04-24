var totalScore = 0;
var wins = 0;
var losses = 0;
var sushiArray = [];
var randomNumber = randomNumberGenerator(19, 120);
var sushiValue = randomNumberGenerator(1, 12);

function randomNumberGenerator(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};
function randomSushiNumbers(){
    for (i = 0; i < 4; i++){
        sushiArray.push(randomNumberGenerator(1, 12));
    } 
    console.log(sushiArray);
};
function reset(){
    randomNumber = randomNumberGenerator(19, 120);
    $("#randomNumber").text(randomNumber);
    totalScore = 0;
    sushiArray = [];
    randomSushiNumbers();
    $("#totalScore").text(totalScore);
};
//win/lose condition
function winLose(){
    if (totalScore === randomNumber) {
        wins++;
        alert("You won! Have some sushi!");
        $("#wins").text("Wins: " + wins); 
        reset();  
    }
    else if (totalScore > randomNumber) {
        losses++;
        alert("You lost! No sushi for you!");
        $("#losses").text("Losses: " + losses); 
        reset();
    }
};

$(document).ready(function(){
    var drumSong = document.getElementById("drumSound"); 
        drumSong.play(); 
    //Generates random number user needs to match
    $("#randomNumber").text(randomNumber);
    
    //Generates an array of four random sushi numbers
    randomSushiNumbers();

    // Assigns value for buttons
    $("#sushi1").on("click", function() {
        totalScore = totalScore + sushiArray[0];
        $("#totalScore").text(totalScore);
        winLose();
    });
    $("#sushi2").on("click", function() {
        totalScore = totalScore + sushiArray[1];
        $("#totalScore").text(totalScore);
        winLose();
    });
    $("#sushi3").on("click", function() {
        totalScore = totalScore + sushiArray[2];
        $("#totalScore").text(totalScore);
        winLose();
    });
    $("#sushi4").on("click", function() {
        totalScore = totalScore + sushiArray[3];
        $("#totalScore").text(totalScore);  
        winLose();
    });
});
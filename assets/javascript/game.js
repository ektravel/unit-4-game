var totalScore = 0;
var randomNumber = randomNumberGenerator(19, 10);
var wins = 0;
var losses = 0;
var sushiValue = randomNumberGenerator(1, 12);
function randomNumberGenerator(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

$(document).ready(function(){
    $("button").on("click", function() {
        $("#randomNumber").text(randomNumber);
    });

});
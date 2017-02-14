
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lives;
var words = ["biscuit", "bender", "hockey", "puck", "stick", "goal"];
var wordHolder;
var guess;
var guesses = [];
var score = 0;

var keyGuess = document.onkeyup =
	function check() {
		for (var i = 0; i < words.length; i++) {
			if (words[i] === guess) {
				guesses[i].innerHTML = guess;
				counter += 1;
			}
		}
		var g = (words.indexOf(guess));
		if (g === -1) {
			lives -= 1;
			showLives();
		} else {
			showLives();
		}
	}

var showLives = function (){
	score = 0;
	document.getElementById("lives").innerHTML = "You have " + lives + " lives";
	document.getElementById("score").innerHTML = score;
	if (lives < 1) {
	  document.getElementById("lives").innerHTML = "Game Over";
	}

	for (var i = 0; i < guesses.length; i++) {
	  if (counter === guesses.length) {
	  	var score =+1;
	    document.getElementById("lives").innerHTML = "You Win!";
	    document.getElementById("score").innerHTML = score;
	  }
	}
}


var result = function() {
	wordHolder = document.getElementById("wordHolder");
	correct = document.createElement("ul");

	for (var i = 0; i < words.length; i++) {
		correct.setAttribute("id", "myWord");
		guess = document.createElement("li");
		guess.setAttribute("class", "guess");
		guess.innerHTML = "_"};
}

$(".playBtn").on("click", function(){
	words = words[Math.floor(Math.random() * (words.length - 1))];
	// chosenWord = words[chooseWord];
	console.log(words);
	guesses = [];
	lives = 9;
	showLives();
});




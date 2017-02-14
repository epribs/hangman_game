
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lives;
var words = ["biscuit", "bender", "hockey", "puck", "stick", "goal"];
// var wordBank = words.split("");
var wordHolder;
var guess;
var guesses = [];
var score = 0;

var keyGuess = document.onkeyup = check();
	function check() {
		for (i = 0; i < words.length; i++) {
			if (words.charAt[i] === guess) {
				// guesses[i] = guess;
				// console.log(guesses);
				// counter += 1;
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


var result = function() {
	wordHold = document.getElementById("wordHolder");
	correct = document.createElement("ul");
	wordHold.appendChild(correct);

	for (var i = 0; i < words.length; i++) {
		var guess = document.createElement("li");
		correct.appendChild(guess);
		guess.setAttribute("class", "guess");
		guess.innerHTML = "_"};
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


$(".playBtn").on("click", function(){
	words = words[Math.floor(Math.random() * words.length)];
	// chosenWord = words[chooseWord];
	console.log(words);
	guesses = [];
	lives = 9;
	showLives();
	result();

});




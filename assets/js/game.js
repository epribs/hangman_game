
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lives;
var words = ["biscuit", "bender", "hockey", "puck", "stick", "goal"];
var word;
// var wordBank = words.split("");
var wordHold;
var guess;
var guesses = [];
var score = 0;
var counter = 0;

$(".playBtn").on("click", function(){
	word = words[Math.floor(Math.random() * words.length)];
	// chosenWord = words[chooseWord];
	console.log(word);
	guesses = [];
	lives = 9;
	showLives();
	result();
});

document.onkeyup = function(event) {
	var guess = String.fromCharCode(event.keyCode).toLowerCase();
	check(guess);
};

function

function check(guess) {
	for (i = 0; i < word.length; i++) {
		if (word.charAt(i) === guess) {
			guesses.push(guess);
			counter += 1;
			$(".guess").text(guess);
		}
	}

	var g = (word.indexOf(guess));
	if (g == -1) {
		lives -= 1;
		showLives();
	} else {
		//wordReveal(guess);
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

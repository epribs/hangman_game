// Creating Dictionary
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Words to choose from
var words = ["biscuit", "bender", "hockey", "puck", "stick", "goal"];
var chosenWord;
// Lives to start
var lives = 9;

// Word Holder UL
var wordHolder = document.getElementById("wordHolder");
var li = document.createElement("li");



// Play the Game
function playGame(){
		// Choose a word
		chosenWord = words[Math.floor(Math.random() * words.length)];
		//console.log(chosenWord);

		// Send word to blanks
		answerBank(chosenWord);


		// guesses = [];
		// lives = 9;
		// showLives();
		// result();
}

// Create the blanks
function answerBank(chosenWord) {
	var lettersArr = chosenWord.split("");
	var blanks = lettersArr.map(function(i){
			return "_";
	});
	console.log(blanks);
	for (var i = 0; i < lettersArr.length; i++){
		console.log(lettersArr[i]);
		// var wordHolder = document.getElementById("wordHolder");
		var li = document.createElement("li");
		wordHolder.appendChild(li);
		li.setAttribute('data-key', i)
		li.innerHTML = blanks[i];
	}
}

function guess(key){

}

/*

var word;
// var wordBank = words.split("");
var wordHold = document.getElementById("wordHolder")
var guess;
var guesses = [];
var score = 0;
var counter = 0;



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

*/

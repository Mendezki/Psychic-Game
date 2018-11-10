var options = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",
];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = [];
//var gameWon = false;


    document.onkeyup = function () {
        var userGuess = (event.key).toLowerCase();

        //console.log(userGuess)

        var computerGuess = options[Math.floor(Math.random() * options.length)];

        //console.log(computerGuess)


        if (userGuess == computerGuess) {
            wins++;
            guessesLeft = 10;
            yourGuesses = [];
        }
        else {
            guessesLeft = guessesLeft - 1;
            yourGuesses.push(userGuess);

        }
        if (guessesLeft == 0){
            losses++;
            guessesLeft = 10;
            yourGuesses = [];
        }        

        var html = "<p>Guess what letter I'm thinking of:</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guess: " + yourGuesses + " " + "</p>";

        document.querySelector("#game").innerHTML = html;
        
    }

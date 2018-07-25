// VARIABLES
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var guessesMade = 0;
var strokes = [];
var string = [];
var currentGuesses = [];

// FUNCTIONS
// Generates a random letter.
function genLetter() {    
    var letters = "abcdefghijklmnopqrstuvwxyz";

    string += letters.charAt(Math.floor(Math.random() * letters.length));
    return string;    

    // document.querySelector("#guess").innerHTML = "Computer's choice: " += string;
}

genLetter();
console.log(string);




// Logs keystrokes & checks for match
document.onkeyup = function(event) {
    strokes += (event.key);
    console.log("Computer choice:", string)
    console.log(strokes);
    currentGuesses += strokes + ", ";
    document.querySelector("#made").innerHTML = "Guesses made: " + currentGuesses;   
    if (string == strokes) {
        winCount += 1;
        // upWins
        document.querySelector("#wins").innerHTML = "Wins: " + winCount;
        console.log("You win!"); 
        guessesLeft = 9;  
        // console.log(genLetter());
        string = [];
        strokes = [];
        genLetter();
        console.log(string);
        currentGuesses = [];                
        
    }   
    else {
            guessesLeft -= 1;
            console.log(guessesLeft);
            strokes = [];
            document.querySelector("#left").innerHTML = "Guesses left: " + guessesLeft;
            
            if (guessesLeft < 1) {
                lossCount += 1;
                console.log("You lose!");
                document.querySelector("#losses").innerHTML = "Losses: " + lossCount;
                // upLosses();
                guessesLeft = 9;
                currentGuesses = [];
                
                

            }
        }
    
    
}


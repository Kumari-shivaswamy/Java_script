
// numberGuessingGame.js

function numberGuessingGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    let attempts = 0;
    let guessedCorrectly = false;

    console.log("Welcome to the Number Guessing Game!");
    console.log("Guess a number between 1 and 100.");
     while (!guessedCorrectly) {
        const userGuess = parseInt(prompt("Enter your guess: "), 10);
        attempts++;

       
    }
   
    
}

// Start the game
numberGuessingGame();

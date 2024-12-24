
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
     if (isNaN(userGuess)) {
            console.log("Please enter a valid number.");
        } else if (userGuess < targetNumber) {
            console.log("Too low! Try again.");
        } else if (userGuess > targetNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
            guessedCorrectly = true;
        }
       
    }
   
    
}

// Start the game
numberGuessingGame();

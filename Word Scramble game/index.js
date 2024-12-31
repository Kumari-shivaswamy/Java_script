
// wordScramble.js

function scrambleWord(word) {
    const wordArray = word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // Swap characters
    }
    return wordArray.join("");
}

function wordScrambleGame() {
    const words = ["javascript", "programming", "developer", "frontend", "challenge"];
    const randomIndex = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomIndex];
    const scrambledWord = scrambleWord(selectedWord);

    console.log("Welcome to the Word Scramble Game!");
    console.log(`Scrambled Word: ${scrambledWord}`);
     const userGuess = prompt("Unscramble the word: ").toLowerCase();

    if (userGuess === selectedWord) {
        console.log("Congratulations! You guessed it right.");
    } else {
        console.log(`Oops! The correct word was: ${selectedWord}`);
    
   
}



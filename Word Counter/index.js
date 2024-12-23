// wordCounter.js

function countWords(input) {
    const words = input.trim().split(/\s+/);
    return words.length;
}

function countCharacters(input) {
    const characters = input.replace(/\s+/g, ""); // Remove all spaces
    return characters.length;
}



// Run the Word Counter
console.log("Welcome to the Word and Character Counter!");
wordAndCharacterCounter();


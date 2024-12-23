// wordCounter.js

function countWords(input) {
    const words = input.trim().split(/\s+/);
    return words.length;
}

function countCharacters(input) {
    const characters = input.replace(/\s+/g, ""); // Remove all spaces
    return characters.length;
}
function wordAndCharacterCounter() {
    const input = prompt("Enter a sentence or paragraph to analyze:");
    if (!input || input.trim() === "") {
        console.log("You entered an empty string!");
        return;
    }

    
}


// Run the Word Counter
console.log("Welcome to the Word and Character Counter!");
wordAndCharacterCounter();


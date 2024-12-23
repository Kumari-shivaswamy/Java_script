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
    const wordCount = countWords(input);
    const characterCount = countCharacters(input);

    console.log(`Analysis of your input:`);
    console.log(`Words: ${wordCount}`);
    console.log(`Characters (excluding spaces): ${characterCount}`);
    
}


// Run the Word Counter
console.log("Welcome to the Word and Character Counter!");
wordAndCharacterCounter();


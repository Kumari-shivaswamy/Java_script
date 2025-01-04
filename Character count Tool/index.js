// characterCounter.js

function characterCounter() {
    console.log("Welcome to the Character Counter Tool!");
    const userInput = prompt("Enter a sentence or paragraph to analyze:");

    if (!userInput || userInput.trim() === "") {
        console.log("You entered an empty string. Please try again.");
        return;
    }

    const charCount = userInput.length;
    const wordCount = userInput.trim().split(/\s+/).length;
    const sentenceCount = userInput.split(/[.!?]/).filter(Boolean).length;

   
    
}

// Start the Character Counter Tool
characterCounter();


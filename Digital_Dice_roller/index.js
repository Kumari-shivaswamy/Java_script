// diceRoller.js

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
function diceRollerGame() {
    console.log("Welcome to the Digital Dice Roller!");
    console.log("Choose a type of dice to roll:");
   console.log("1. 6-sided dice");
    console.log("2. 12-sided dice");
    console.log("3. 20-sided dice");
 const choice = parseInt(prompt("Enter the number of the dice you want to roll (1-3): "), 10);
    let sides;

    switch (choice) {
        case 1:
            sides = 6;
            break;
        case 2:
            sides = 12;
            break;
        case 3:
            sides = 20;
            break;
        default:
            console.log("Invalid choice! Please restart the game.");
            return;
   
    }
    const rollResult = rollDice(sides);
    
}


// Start the Digital Dice Roller
diceRollerGame();


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
 if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    }

   
    return "Computer wins!";
}
function playRockPaperScissors() 
{
    console.log("Welcome to Rock, Paper, Scissors!");
    const playerChoice = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();

        if (!["rock", "paper", "scissors"].includes(playerChoice)) {
        console.log("Invalid choice! Please enter rock, paper, or scissors.");
        return;
    }
  const computerChoice = getComputerChoice();
    
    console.log(`You chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

} 

// Start the game
playRockPaperScissors();

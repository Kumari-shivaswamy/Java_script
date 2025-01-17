
// primeChecker.js

function isPrime(number) {
    if (number <= 1) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false; // Divisible by a number other than 1 and itself
    }
    return true;
}
function primeChecker() {
    const number = parseInt(prompt("Enter a number to check if it's prime: "), 10);
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
        return;
    }

    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
    } else {
        console.log(`${number} is not a prime number.`);
    }
    
}


// Run the Prime Checker
console.log("Welcome to the Prime Number Checker!");
primeChecker();

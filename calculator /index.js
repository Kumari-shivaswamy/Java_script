// simpleCalculator.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

function calculate() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const operator = prompt("Enter an operator (+, -, *, /): ");
    const num2 = parseFloat(prompt("Enter the second number: "));

    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
       
    }

    console.log(`Result: ${result}`);
}

// Run the calculator
console.log("Welcome to the Simple Calculator!");
calculate();




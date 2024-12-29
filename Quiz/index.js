// quizGame.js

function runQuiz() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["1. Paris", "2. London", "3. Berlin", "4. Madrid"],
            answer: 1,
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["1. Earth", "2. Mars", "3. Jupiter", "4. Saturn"],
            answer: 2,
        },
        {
            question: "What is the square root of 64?",
            options: ["1. 6", "2. 7", "3. 8", "4. 9"],
            answer: 3,
        },
    ];
     let score = 0;

    console.log("Welcome to the Quiz Game!");
    console.log("Type the number corresponding to your answer.\n");
for (let i = 0; i < questions.length; i++) {
        console.log(`Question ${i + 1}: ${questions[i].question}`);
        questions[i].options.forEach((option) => console.log(option));
        const userAnswer = parseInt(prompt("Your answer: "), 10);
 if (userAnswer === questions[i].answer) {
            console.log("Correct!\n");
            score++;
        } 
    else {
            console.log("Wrong! The correct answer was: " + questions[i].options[questions[i].answer - 1] + "\n");
        }
   
   
    
       


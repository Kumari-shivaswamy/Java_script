// randomJokeGenerator.js

function getRandomJoke() {
    const jokes = [
        { setup: "Why don't skeletons fight each other?", punchline: "They don't have the guts." },
       
        { setup: "Why don't some couples go to the gym?", punchline: "Because some relationships don't work out." }
    ];

    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    return `${joke.setup}\n${joke.punchline}`;
}

// Display a random joke
console.log(getRandomJoke());



import { getRandomThrow, didUserWin } from "./get-random-throw.js";

// import functions and grab DOM elements
const playButton = document.getElementById('throw-button');
const winSpan = document.getElementById('win-count');
const loseSpan = document.getElementById('loss-count');
const drawSpan = document.getElementById('draw-count');
const resultsSpan = document.getElementById('you-won-lost-span');


// initialize state
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const userClickChoice = document.querySelector('input:checked');
    const userPlayChoice = userClickChoice.value;
    console.log(userPlayChoice);
    let computerNumber = Math.ceil(Math.random() * 3);
    const computerPlayChoice = getRandomThrow(computerNumber);
    console.log(computerPlayChoice);

    const theOutcome = didUserWin(userPlayChoice, computerPlayChoice);

    if (theOutcome === 'You Won!') {
        winCount++;
        winSpan.textContent = winCount;
        resultsSpan.textContent = "You Did It!";
    }
    if (theOutcome === 'You Lose!') {
        loseCount++;
        loseSpan.textContent = loseCount;
        resultsSpan.textContent = "You Lost :("


    }
    if (theOutcome === 'We Have A Draw') {
        drawCount++;
        drawSpan.textContent = drawCount;
        resultsSpan.textContent = 'Its a draw.';
    }


})

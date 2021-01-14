
import { getRandomThrow, didUserWin } from "./get-random-throw.js";

// import functions and grab DOM elements
const playButton = document.getElementById('throw-button');
const winSpan = document.getElementById('win-count');
const loseSpan = document.getElementById('loss-count');
const drawSpan = document.getElementById('draw-count');
const resultsSpan = document.getElementById('you-won-lost-span');
const resetGame = document.getElementById('reset-button');


// initialize state
let winCount = 0;
let loseCount = 0;
let drawCount = 0;
winSpan.textContent = winCount;
loseSpan.textContent = loseCount;
drawSpan.textContent = drawCount;
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
        resultsSpan.textContent = `The computer played ${computerPlayChoice} so you won!!!!`;
    }
    if (theOutcome === 'You Lose!') {
        loseCount++;
        loseSpan.textContent = loseCount;
        resultsSpan.textContent = `The Computer played ${computerPlayChoice} so you Lost :(`


    }
    if (theOutcome === 'We Have A Draw') {
        drawCount++;
        drawSpan.textContent = drawCount;
        resultsSpan.textContent = `The computer played ${computerPlayChoice} so it's a draw.`;
    }


})

resetGame.addEventListener('click', () => {
    winCount = 0;
    loseCount = 0;
    drawCount = 0;
    winSpan.textContent = winCount;
    loseSpan.textContent = loseCount;
    drawSpan.textContent = drawCount;
    resultsSpan.textContent = '';
})

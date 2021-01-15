import { getRandomThrow } from './get-random-throw.js';

const winSpan = document.getElementById('win-count');
const loseSpan = document.getElementById('loss-count');
const drawSpan = document.getElementById('draw-count');
const resultsSpan = document.getElementById('you-won-lost-span');
const resetSpan = document.getElementById('reset-span');

let computerNumber = Math.ceil(Math.random() * 3);
const computerPlayChoice = getRandomThrow(computerNumber);

let winCount = 0;
let loseCount = 0;
let drawCount = 0;
let resetCount = 0;

export function gameCount() {
    winSpan.textContent = winCount;
    loseSpan.textContent = loseCount;
    drawSpan.textContent = drawCount;
}

export function getGameResults(theOutcome) {
    if (theOutcome === 'You Won!') {
        winCount++;
        winSpan.textContent = winCount;
        resultsSpan.textContent = `The computer played ${computerPlayChoice} so you won!!!!`;
    }
    if (theOutcome === 'You Lose!') {
        loseCount++;
        loseSpan.textContent = loseCount;
        resultsSpan.textContent = `The Computer played ${computerPlayChoice} so you Lost :(`;

    }
    if (theOutcome === 'We Have A Draw') {
        drawCount++;
        drawSpan.textContent = drawCount;
        resultsSpan.textContent = `The computer played ${computerPlayChoice} so it's a draw.`;
    }
}

export function gameReset() {
    winCount = 0;
    loseCount = 0;
    drawCount = 0;
    resetCount++;
    resetSpan.textContent = resetCount;
    winSpan.textContent = winCount;
    loseSpan.textContent = loseCount;
    drawSpan.textContent = drawCount;
    resultsSpan.textContent = '';
}

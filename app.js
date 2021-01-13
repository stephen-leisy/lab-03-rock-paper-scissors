// import functions and grab DOM elements

const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('loss-count');
const drawCount = document.getElementById('draw-count');
const youWinSpan = document.getElementById('you-won');
const youLoseSpan = document.getElementById('you-lost');
const youDrawSpan = document.getElementById('you-tied');

console.log(winCount, loseCount, drawCount, youWinSpan, youLoseSpan, youDrawSpan);
// initialize state

// set event listeners to update state and DOM
const userPlayChoice = document.querySelector('input: checked');
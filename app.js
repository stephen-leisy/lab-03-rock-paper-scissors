// import functions and grab DOM elements
const playButton = document.getElementById('throw-button');
// const winCount = document.getElementById('win-count');
// const loseCount = document.getElementById('loss-count');
// const drawCount = document.getElementById('draw-count');
const youWinSpan = document.getElementById('you-won');
const youLoseSpan = document.getElementById('you-lost');
const youDrawSpan = document.getElementById('you-tied');

// initialize state
let winCount = 0;
let loseCount = 0;
let drawCount = 0;

// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const userPlayChoice = document.querySelector('input:checked');
    console.log(userPlayChoice.value);
})

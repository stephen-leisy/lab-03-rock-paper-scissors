import { getRandomThrow, didUserWin } from './get-random-throw.js';
import { getGameResults, gameReset, gameCount } from './counter.js';
// import functions and grab DOM elements
const playButton = document.getElementById('throw-button');
const resetGame = document.getElementById('reset-button');

// initialize state

gameCount();
// set event listeners to update state and DOM
playButton.addEventListener('click', () => {
    const userClickChoice = document.querySelector('input:checked');
    const userPlayChoice = userClickChoice.value;
    let computerNumber = Math.ceil(Math.random() * 3);
    const computerPlayChoice = getRandomThrow(computerNumber);
    const theOutcome = didUserWin(userPlayChoice, computerPlayChoice);
    getGameResults(theOutcome);
});

resetGame.addEventListener('click', gameReset);

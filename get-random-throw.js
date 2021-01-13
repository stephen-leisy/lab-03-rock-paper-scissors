let computerNumber = Math.ceil(Math.random() * 3);
console.log(Math.ceil(Math.random() * 3));

export function getRandomThrow(booger) {
    if (booger === 1) {
        return 'rock'
    } else if (booger === 2) {
        return 'paper'
    } else
        return 'scissors'

}

export function didUserWin(player, computer) {
    if ((player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'rock')) {
        return 'You Lose!'
    }
    if ((player === 'rock' && computer === 'rock') ||
        (player === 'paper' && computer === 'paper') ||
        (player === 'scissors' && computer === 'scissors')) {
        return 'We Have A Draw'
    }
    if ((player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'rock' && computer === 'scissors')) {
        return 'You Won!'
    }

}
# THE PLAN

## HTML STUFFS

title > Rock, Paper, scissors!
explain rules in a <li>
3 radio buttons
button for 'throw'
<div> for wins/losses/plays
<div> for you win! You lose

## JS PLAN

import DOM elements 
button for gameplay
display divs

initialize state
    let win = 0;
    let loss = 0;
    let draw = 0;

event listener to button
 that pulls computer selection
 that gets user selections
 and runs them both ina function

create random throw for computer. round up? Math.random() * 3? turn it into a getRandomThrow function in  get-random-throw.js module that returns the "rock, paper, scissors to a numerical value.

creat a didUserWin function that compares user vs computer and returns draw, win, or lose.





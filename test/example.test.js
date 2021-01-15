// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow, didUserWin } from '../get-random-throw.js';


const test = QUnit.test;

test('it should return rock when presented with 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return paper when presented with 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return lose when you enter rock and paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You Lose!';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return draw when you enter rock and rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'We Have A Draw';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
}); test('it should return win when you enter rock and scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You Won!';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

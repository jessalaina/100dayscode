/*
** user types in input
** clicks submit button (click event)
** get user input.value (number submitted)
** convert input to number (will come to us as string)
** if number % 2 === 0, number is even
** else number is odd
** output even or odd to webpage
*/

const input = document.querySelector('input');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

btn.addEventListener('click', numOutcome);

function numOutcome(e) {
    // stop form from refreshing
    e.preventDefault();

    // set variable for the users input value
    let userNum = Number(input.value);

    // anything that is even will divide evenly by 2
    if(userNum % 2 === 0) {
        result.innerText = `You put ${userNum}. That number is even.`;
    } else {
        result.innerText = `You put ${userNum}. That number is odd.`;
    }

}
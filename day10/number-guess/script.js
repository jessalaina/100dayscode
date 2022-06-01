/*
** set a random number between 1 - 100
** user inputs their guess via input
** user clicks submit to give guess -- event target
** number is compared to random number
** if number is higher, let user know and ask to guess again
** if number is lower, let user know and ask to guess again
** if number === random number, end game
*/

const input = document.querySelector('input');
const btn = document.querySelector('button');
const answer = document.querySelector('.answer');
const guesses = document.querySelector('.guesses');

btn.addEventListener('click', guessGame);

const initialNum = Math.floor(Math.random() * 100) + 1;


function guessGame(e) {
    // stop page refresh
    e.preventDefault();

    // get users guess
    let userGuess = Number(input.value);

    // guess too high, too low, just right
    if(userGuess < initialNum) {
        answer.innerHTML = `Sorry, ${userGuess} is too low. Please try again.`
        // incorrect low numbers -- user notice
        guesses.innerText += userGuess + ',';
    } else if (userGuess > initialNum) {
        answer.innerHTML = `Sorry, ${userGuess} is too high. Please try again.`
        // incorrect high numbers -- user notice
        guesses.innerText += userGuess + ',';
    } else {
        answer.innerHTML = `Yes, ${userGuess} is the number!`
    }

    // clear guess
    input.value = '';
}
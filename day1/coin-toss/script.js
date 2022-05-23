const btns = document.querySelectorAll('button');
const div = document.querySelector('.message');
const para = document.createElement('p');
const h2 = document.querySelector('h2');

// options to choose from on coin flip
const coinArr = ['Heads', 'Tails'];
// score to update (keep track)
let score = [0,0];

// loop through buttons to add event listeners to all
for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', flip);
}

function flip(e) {
    // randomize coin flip
    const coinFlip = Math.floor(Math.random() * 2);
    let playerGuess = e.target.innerText;
    let computerGuess = coinArr[coinFlip];

    h2.innerHTML = `Computer selected ${computerGuess} <br/>`

    // figure out who won and increase score for either player or computer
    if (playerGuess === computerGuess) {
        h2.innerHTML += `Good job player, you scored a point!`;
        score[0]++;
    } else {
        h2.innerHTML += `Sorry player, can't win them all.`;
        score[1]++;
    }
    // add score tally to html
    para.innerHTML = `Player score: ${score[0]}, Computer score: ${score[1]}`;
    div.appendChild(para);
}
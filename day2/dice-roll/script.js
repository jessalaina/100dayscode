const btn = document.querySelector('button');
const dice1 = document.querySelector('.dice-1');
const dice2 = document.querySelector('.dice-2');
const gameBoard = document.querySelector('.game-board');
const newH3 = document.createElement('h3');
const para = document.createElement('p');

let score = [0, 0];

function rollDice() {
    // get random roll for each player
    let randomRollOne = Math.floor(Math.random() * 6) + 1;
    let randomRollTwo = Math.floor(Math.random() * 6) + 1;
    // set node text to show what the random roll is
    dice1.innerHTML = randomRollOne;
    dice2.innerHTML = randomRollTwo;
    // use logic to show whos roll is higher or if there is a tie
    if(randomRollOne > randomRollTwo){
       gameBoard.appendChild(newH3);
       newH3.innerText = "Player 1's roll is higher";
       score[0]++;
    } else if (randomRollTwo > randomRollOne){
        gameBoard.appendChild(newH3);
        newH3.innerText = "Player 2's roll is higher";
        score[1]++;
    } else {
        gameBoard.appendChild(newH3);
        newH3.innerText = "It's a tie";
    }
        // key track of score between players
        gameBoard.appendChild(para);
        para.innerHTML = `Player 1: [${score[0]}], Player 2: [${score[1]}]`;
}

btn.addEventListener('click', rollDice);
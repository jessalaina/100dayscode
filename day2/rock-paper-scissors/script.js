const div = document.querySelector('div');
const btns = document.querySelectorAll('button');

let score = [0, 0];

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', playGame);
}

function playGame(e) {
    let computerChoice = Math.floor(Math.random() * 3);
    let playerChoice = e.target.innerText;

    if(computerChoice === 0 ) {
       computerChoice = 'Rock';
    } else if(computerChoice === 1) {
        computerChoice = 'Paper';
    } else if(computerChoice === 2){
        computerChoice = 'Scissors'
    }
    console.log(computerChoice);

    let result = checkWinner(playerChoice, computerChoice);

    if(result === 'Player') {
        result += 'wins!';
        score[0]++;
    } else if(result === 'Computer'){
        result += 'wins!';
        score[1]++;
    }

    div.innerHTML = `Player ${score[0]}, Computer ${score[1]}`;

    function checkWinner(player, comp) {
        if(player === comp) {
            return 'Draw';
        }
        if(player === 'Rock') {
            if(comp === 'Paper') {
                return 'Computer';
            } else {
                return 'Player';
            }
        }
        if(player === 'Paper'){
            if(comp === 'Scissors'){
                return 'Computer';
            } else {
                return 'Player';
            }
        }
        if(player === 'Scissors'){
            if(comp === 'Rock'){
                return 'Computer';
            } else {
                return 'Player';
            }
        }
    }
}
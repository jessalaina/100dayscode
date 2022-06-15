const flipBtn = document.querySelector('.flip');
const coin = document.querySelector('.circle');

flipBtn.addEventListener('click', flipCoin);

function flipCoin() {
    coin.style.animation = 'none';
    if(Math.random() <= 0.5) {
        coin.style.animation = "flip-heads 3s forwards";
    } else {
        coin.style.animation = 'flip-tails 3s forwards';
    }
}
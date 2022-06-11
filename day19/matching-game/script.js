/*
** onclick, flip card over
** will figure out the rest of game later
*/

const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('click', flipCard);
})

function flipCard(e) {
    e.target.classList.toggle('flip-card');

    // continuation from day 19

let firstClick = e.target.textContent;
let secondClick = e.target.textContent;

if(firstClick === secondClick) {
    console.log('right');
} else {
    console.log('wrong');
}
}
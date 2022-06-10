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
}
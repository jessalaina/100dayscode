/*
** click on cards one at a time (randomly) to try to match 2
** loop through card divs -- get single event click
** when 1 card is clicked it will flip and stay flipped for 3 seconds (setInterval) unless matched to another card
** on match, remove cards from "cards" container
** continue until all cards gone
*/

const cards = document.querySelectorAll('.back');
const front = document.querySelector('.front');

// loop through cards adding click event listener
cards.forEach(card => {
    card.addEventListener('click', (e) => {
        // get current display of card
        let display = front.style.display;

        if (display === 'block') {
            front.style.display = 'none';
        } else {
            front.style.display = 'block';
        }
    });
})
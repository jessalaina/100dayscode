/*
** have area where user can input what they want to memorize and the answer
** on click new flashcard will be added to screen
** on screen will see front of card
** on click of arrow button, flip card on y-axis to see answer
*/

const save = document.querySelector('.save');
const container = document.querySelector('.container');
const newTitle = document.querySelector('.new-title');
const newAnswer = document.querySelector('.new-answer');
const flipBtns = document.querySelectorAll('.bi');

// click to add flashcard
save.addEventListener('click', addCard);

// add div html to add inputs to screen
function addCard() {
    // created the needed div
    const newDiv = document.createElement('div');
    // add class card to match for bootstrap styles
    newDiv.classList.add('card');
    // add all internal html to get card on screen
    newDiv.innerHTML = `<div class="card">
    <div class="card-body">
        <h3 class="card-title">
            ${newTitle.value}
        </h3>
        <i class="bi bi-arrow-right-square-fill"></i>
    </div>
    <div class="card-back hide">
        <p class="card-text">${newAnswer.value}</p>
    </div>
</div>`;
    // append new div to container
    container.append(newDiv);
    newTitle.value = '';
    newAnswer.value = '';
}

// loop through flip buttons
flipBtns.forEach(btn => {
    btn.addEventListener('click', flipCard);
})

// add flip card abilities
function flipCard() {
    console.log('hi');
}
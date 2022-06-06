const container = document.querySelector('.container');
const btns = document.querySelectorAll('.bi');
const cardBack = document.querySelectorAll('.card-back');
const newTitle = document.querySelector('.new-title');
const newAnswer = document.querySelector('.new-answer')
const save = document.querySelector('.save');
const createCard = document.createElement('div');

save.addEventListener('click', addCard);

function addCard() {
    createCard.classList.add('card');
    createCard.innerHTML = `<div class="card-body">
                            <h3 class="card-title">
                                ${newTitle.value};
                            </h3>
                            <i class="bi bi-arrow-right-square-fill"></i>
                            </div>
                            <div class="card-back hide">
                                <p class="card-text">${newAnswer.value}</p>
                            </div>`
    container.appendChild('createCard');
    newTitle.value = '';
    newAnswer.value = '';
}

btns.forEach(btn => {
    btn.addEventListener('click', flipCard);
})

function flipCard() {
    cardBack.forEach(back => {
        back.classList.add('flip');
    })
}


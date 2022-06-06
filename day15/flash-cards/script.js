const save = document.querySelector('.save');
const container = document.querySelector('.container');
const newTitle = document.querySelector('.new-title');
const newAnswer = document.querySelector('.new-answer');

save.addEventListener('click', addCard);

function addCard() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('card');
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
    container.append(newDiv);
}

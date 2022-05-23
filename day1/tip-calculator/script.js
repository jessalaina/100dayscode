const input = document.getElementById('amount');
const tenBtn = document.querySelector('.ten');
const fifteenBtn = document.querySelector('.fifteen');
const twentyBtn = document.querySelector('.twenty');
const h3 = document.querySelector('.final-amount');

function tenPercent() {
    // get user input
    let userInput = Number(input.value);
    // calculate 10% tip on user input
    let tenTip = Number((userInput * .10).toFixed(2));
    // // calculate total plus tip
    let total = (userInput + tenTip);
    // add paragraph and insert text
    let para = document.createElement('p')
    para.insertAdjacentText('beforeend', `Your bill amount is ${userInput}. You are tipping 10%. Your total is ${total}`);
    h3.appendChild(para);
    input.value = '';
}

function fifteenPercent() {
    // get user input
    let userInput = Number(input.value);
    // calculate 10% tip on user input
    let fifteenTip = Number((userInput * .15).toFixed(2));
    // // calculate total plus tip
    let total = (userInput + fifteenTip);
    // add paragraph and insert text
    let para = document.createElement('p')
    para.insertAdjacentText('beforeend', `Your bill amount is ${userInput}. You are tipping 15%. Your total is ${total}`);
    h3.appendChild(para);
    input.value = '';
}

function twentyPercent() {
    // get user input
    let userInput = Number(input.value);
    // calculate 10% tip on user input
    let twentyTip = Number((userInput * .20).toFixed(2));
    // // calculate total plus tip
    let total = (userInput + twentyTip);
    // add paragraph and insert text
    let para = document.createElement('p')
    para.insertAdjacentText('beforeend', `Your bill amount is ${userInput}. You are tipping 20%. Your total is ${total}`);
    h3.appendChild(para);
    input.value = '';
}

tenBtn.addEventListener('click', tenPercent);
fifteenBtn.addEventListener('click', fifteenPercent);
twentyBtn.addEventListener('click', twentyPercent);
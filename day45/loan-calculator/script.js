const amount = document.querySelector('.loan-amount').value;
const percent = document.querySelector('.loan-percent').value;
const years = document.querySelector('.loan-years').value;
const form = document.querySelector('form');
const btn = document.querySelector('.submit');


btn.addEventListener('click', calculateLoan);

function calculateLoan() {
    let numAmount = Number(amount);
    let numPercent = Number(percent);
    let numYears = Number(years);
    let current = (numPercent / numYears * numAmount);
    form.innerHTML = current;
}
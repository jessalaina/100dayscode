const content = document.querySelector('.content');
const btn = document.querySelector('.submit');

btn.addEventListener('click', calculateLoan);

function calculateLoan() {
    const amount = document.querySelector('#loan-amount').value;
    const percent = document.querySelector('#loan-percent').value;
    const months = document.querySelector('#loan-months').value;

    let interest = (amount * (percent * 0.01)) / months;
    let total = ((amount / months) + interest).toFixed(2);
    console.log(typeof(total));
    content.innerHTML = `$${total}`;
}
/*
** user inputs expense date & amount
** on click values for each are added to the table
*/

const expense = document.querySelector('.expense');
const date = document.querySelector('.date');
const amount = document.querySelector('.amount');
const submit = document.querySelector('.submit');
const tbody = document.querySelector('tbody');

submit.addEventListener('click', addToTable);

function addToTable(e) {
    // stop page refresh
    e.preventDefault();

    // create table row
    const tr = document.createElement('tr');
    // insert data into table row
    tr.innerHTML = `<td>${expense.value}</td><td>${amount.value}</td><td>${date.value}</td>`;
    // create new table row in table body
    tbody.appendChild(tr);
    
}
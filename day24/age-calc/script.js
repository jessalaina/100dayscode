const submit = document.querySelector('button');
const userInput = document.querySelector('.date');
const ageBox = document.querySelector('.age');
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const day = document.querySelector('.day');

submit.addEventListener('click', calcAge);

function calcAge() {
    let userDate = new Date(userInput.value);
    let userYear = userDate.getFullYear();
    let userMonth = userDate.getMonth();
    let userDay = userDate.getDay();

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDay();

    year.innerHTML = `${currentYear - userYear} years`;
    month.innerHTML = `${currentMonth - userMonth} months`;
    day.innerHTML = `${currentDay - userDay} days`;
}
/*
** get yes or no question from user
** use input to generate answer to question
*/

const input = document.querySelector('textarea');
const para = document.querySelector('p');
const btn = document.querySelector('.submit');

// potential answers to question
const answers = {
    answer1: "Not very likely",
    answer2: "Reply hazy, try again",
    answer3: "Without a doubt",
    answer4: "Outlook good",
    answer5: "Very doubtful",
    answer6: "It is certain",
    answer7: "Ask again later",
    answer8: "Don't count on it",
    answer9: "Cannot predict now",
    answer10: "It is certain"
}

// use button click to generate outcome
btn.addEventListener('click', answerQ);

function answerQ() {
    // get object values
    const values = Object.values(answers);
    // get random value from answers obj
    const prop = values[Math.floor(Math.random() * values.length)];
    // add answer to html paragraph
    para.textContent = prop;
    // clear the question asked out of textarea
    input.value = '';
}
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const finalScore = document.querySelector('span');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // scroll to top so the user sees the score
    scrollTo(0,0);
    // update the score & show on page
    //finalScore.innerHTML = `${score}%`;
    result.classList.remove('d-none');

    // animate score
    let output = 0;
    const timer = setInterval(() => {
        finalScore.innerHTML = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
})
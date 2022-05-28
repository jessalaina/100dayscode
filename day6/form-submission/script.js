const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    // validate using regex
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/
    if(usernamePattern.test(username)){
        feedback.textContent = 'Username valid. Submitted';
    } else {
        feedback.textContent = 'Username must contain letters only and be between 6 & 12 characters long.'
    }
})